var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

// router.get('/', function (req, res) {
//     res.send('Hey this test went through');
// });

// router.get('/about', function (req, res) {
//     res.send('This is an about route');
// });

router.post('/one', function(req, res) {
    res.send("Test 1 went through")
});

router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two";

    TestModel
    .create({
        testdata: testData
    }).then(dataFromDatabase => {
        res.send("Test two went through!")
    })
});

router.post('/three', function(req, res) {
    var testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    res.send("Test three went through!")
    console.log("Test Three went through")
});

router.post('/four', function (req, res) {
    var testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message() {
            res.send("Test 4 went through!")
        }

    );
});

module.exports = router;

