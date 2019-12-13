//var express = require('express'); //1
//var router = express.Router(); //2

   //3    //4 //5            //6
// router.get('/', function (req, res) {
//     //7
//     res.send('Hey!!! This is a test route!');
// });

// //8
// module.exports = router;

// analysis
// 1. Import Express framework and inside the variable 'Express'. This becomes our gateway to using Express methods.
// 2. Create new variable called router. Use the express variable to access the router() method.
// 3. Use the router object by using the router variable to get access into the Router() object methods.
// 4. get() is one of the methods in the object, and call it here. 2 arguments are passing into the .get method.
// 5. The first argument is the path. in this case, it is a '/'.
// 6. The second argument is a callback function, also called 'handler function.' The function gets called when the application receives a request to the specified route and HTTP method. The application "listens" for requests that match the specified routes and methods, and when it detects a match, it calls the specified callback function. 
// 7. Inside our callback function, we call res.send().send() is an express method that can be called on the res or response object. Our response parameter is just a string. 
// 8. We export the module for usage outside of the file. 
// 

// /*Challenge: make a route for http://localhost:3000/test/about */

// router.get('/about', function (req, res) {
//     res.send('This is an about route');
// });
// module.exports = router;

// /* Challenge 2: Add 3 more routes: Contact, Projects, My Contacts */

// let contact = { "user": "kenn",
//                 "email": "kenn@beastmode.com" 
//             }
// router.get('/contact', function (req, res) {
//     res.send(contact);
// })
// module.exports = router;
//  output in postman: 
// {
//     "user": "kenn",
//     "email": "kenn@beastmode.com"
// } 

// let projects = [ "Project 1", "Project 2"];

// router.get('/projects', function (req, res) {
//     res.send(projects);
// })
// module.exports = router;
//  output in postman: 
// [
//     "Project 1",
//     "Project 2"
// ] 

// let mycontacts = [
//     {
//         "user": "quincy",
//         "email": "kenn@beastmode.com"
//     },
//     {
//         "user": "aaron",
//         "email": "aaron@beastmode.com"
//     },
//     {
//         "user": "tom",
//         "email": "tom@beastmode.com"
//     }
// ]

// router.get('/mycontacts', function (req, res) {
//     res.send(mycontacts);
// })
// module.exports = router;

var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test'); //added this in step 2 //1

/** ***************************************
 * Controller Method #1: Simple Response
*******************************************/
     //1        //2
router.post('/one', function(req, res) {
    //3
    res.send("Test 1 went through!")
});
//module.exports = router;

/* Analysis:
1. use Express router object to call the post() method. This cooresponds to the type of HTTP request we are sending. POST is telling the server that the incoming request has data coming with it. you use a POST request when you sign up for an application, send an email, tweet, etc. POST sends data through HTTP to the server, which might send the data to the database to be sotred. 
2. /one will be the endpoint/route we are using. Our route will be named http://localhost:3000/test/one . After that we'll run a callback function, which will fire off a response. 
3. when the client requests the given endpoint, we simply send a string in our response. 

KEY POINT: Notice that we are not yet talking to our model or database. We are simply sending an empty POST and returning a string response. 

Postman output: Test 1 went through!
*/
/****************************************
 * controller Method #2: persisting Data
 ****************************************/
router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two"; //2

    TestModel //3
    .create({ //4
        //6
    testdata: testData //5
    }).then(dataFromDatabase => {
        res.send("Test two went through!")
    })
});
/* postman output: Test two went through!*/

/**********************************************
 * Controller Method #3: req.body
********************************************* */
router.post('/three', function (req, res) {
    var testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    res.send("Test three went through!")
    console.log("Test three went through!")
});

/********************************************
 * Step 4 - Use this with Postman
******************************************* */
router.post('/four', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message() {
            res.send("Test 4 went through!");
        }
    );
});

// in body of postman, enter in {"testdata":{ "item": "step4"}}
//postman output: Test 4 went through

/*******************************
 * Route 5: Return data in a promise
********************************** */
router.post('/five', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(data) {
            res.send(data);
        }
    );

});

/************************************
 * Route 6: Return Response as JSON
*********************************** */
router.post('/six', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(testdata) {
            res.json({
                testdata: testdata
            });
        }
    );
});

/*************************************
 * Route 7: Handle Errors
************************************ */
router.post('/seven', function (req, res) {
    var testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    .then(
        function createSuccess(testdata) {
            res.json({
                testdata: testdata
            });
        },
        function createError(err) {
            res.send(500, err.mesage);
        }
    );
});

/***************************************
 * GET: Get simple message from server
************************************** */
router.get('/helloclient', function (req, res) {
    res.send('This is a message from the server to the client.')
})

/**************************************
 * GET: /one
************************************* */

router.get('/one', function (req, res) {
    TestModel
    .findAll({
        attributes: ['id', 'testdata']
    })
    .then(
        function findAllSuccess(data) {
            console.log("Controller data:", data);
            res.json(data);
        },
        function findallError(err) {
            res.send(500, err.message);
        }
    );
});


module.exports = router;

