const router = require('express').Router();
const User = require('../db').import('../models/user');
const bcrypt = require('bcryptjs');
//var sequelize = require('../db');
const jwt = require('jsonwebtoken');


router.post('/', (req, res) => {
   User.create({
        username: req.body.username,
        passwordhash: bcrypt.hashSync(req.body.password, 10)
    }).then(
        createSuccess = (user) => {
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
             res.json({
                user: user,
                message: 'user created',
                sessionToken: token
            })
        }
    )
    .catch(err => res.send(500, err.message))
})

router.post('/login', (req, res) => {
    User.findOne( { where: { username: req.body.username } } )
    .then(user => {
            if(user) {
                bcrypt.compare(req.body.password, user.passwordhash, (err, matches) => {
                    if(user) {
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                        res.json({
                            user: user,
                            message: "successfully authenticated",
                            sessionToken: token
                        })
                    } else {
                        res.status(502).send({ error: "Sorry not sorry"});
                    }
                })
            } else {
                res.status(500).send({ error: "failed to authenticate" });
            }
        }, err => {
            res.status(501).send({ error: "failure."});
        }
    )
})


module.exports = router;