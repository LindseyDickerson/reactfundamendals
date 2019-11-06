const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const User = sequelize.import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/*************************
 * Create user Endpoint
**************************/

router.post('/createuser', function (req, res) {

    let name = req.body.user.name;
    let email = req.body.user.email;
    let passwordhash = req.body.user.passwordhash

    User.create({
        name: name,
        email: email,
        passwordhash: bcrypt.hashSync(passwordhash, 13)
    }).then(
        function createSuccess(user){
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
            res.json({
                email: email,
                name: name,
                message: 'User Created',
                sesionToken: token
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});

/***************************
 * Signin Endpoint
***************************/
router.post('/signin', function(req, res) {
    User.findOne( {where: {email: req.body.user.email } } ).then(
        function(user) {
            if(user) {
                bcrypt.compare(req.body.user.passwordhash, user.passwordhash, function(err, matches) {
                    if(matches) {
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                        res.json({
                            user: user, 
                            message: "Now that's an authentication!",
                            sesionToken: token
                        });
                    } else {
                        res.status(502).send({error: "what a failure"});
                    } 
                });
            } else {
                res.status(500).send({ error: "you're great at failing!"});
        }
    },
    function(err) {
        res.status(501).send({error: "another failure"});
    }
    );
});

module.exports = router;