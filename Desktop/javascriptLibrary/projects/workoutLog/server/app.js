require ('dotenv').config();
var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
var log = require('./controllers/logcontroller');
var user = require('./controllers/usercontroller');
var sequelize = require('./db');


sequelize.sync(); //tip: pass in {force: true} for resetting tables!

app.use(express.json());

app.use(require('./middleware/headers'));

app.use('/test', test)
//app.use('/about', about)

app.use('/api/user', user);
app.use(require('./middleware/validate-session'));
app.use('/api/log', log);

app.listen(3001, function() {
    console.log('Hey it works!')
});

app.use('/api/test', function(req, res) {
    res.send("This is data from the /api/test endpoint. It's from the server.");
});