var express = require('express')
var router = express.Router() //1
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

/********************************
 * Create user Endpoint: Starter
******************************** */

//2
router.post('/createuser', function (req, res) {

    var username = req.body.user.username;
    var pass = req.body.user.password;      /*3*/

    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(pass, 10)
    }).then(
        function createSuccess(user) {
            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

            res.json({
                user: user,
                message: 'created',
                sessionToken: token
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
})


/* Analysis
1. Bring in necessary imports
2. Start out the POST method for a createuser endpoint
3. Inside the method, we have the basics for creating a new user and returning a message in the response */

/****************
 * Sign in code
*************** */
        //7
router.post('/signin', function(req, res) {
           //1      //2        //3                                  //4    
    User.findOne( { where: { username: req.body.user.username } } ).then(
         //5
        function(user) {
            if (user) {
                bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
                    if (matches) {
                        var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                        res.json({
                            user: user,
                            message: "successfully authenticated",
                            sessionToken: token
                        });
                    } else {
                        res.status(502).send({ error: "you failed, yo"});
                    }
                });
            } else {
                res.status(500).send({ error: "failed to authenticate" }); //6
            }
        },
        function (err) {
            res.status(501).send({ error: "you failed, yo" });
        }
    );
});

/* Analysis:
1. The findOne() method is a Sequelize method that tries to find something within the database that we tell it to look foor. This is Data Retrieval. 
2. Where is an object within sequelize that tells the db to look for something matching its properties.
3. We are looking in the username column in the user table for one thing that matches the value passed from the client. 
4. The promise is handled within the .then() function. 
5. Here we have a function that is called when the promise is resolved ,and if successful, sends the user object back in the response. 
6. Function called if the promise is rejected, printing error to console. 
7. Sending the data, so use router.post instead of router.get .
*/

module.exports = router;