require('dotenv').config();
const express = require('express'); // grabbing dependency and setting to variable
const app = express(); //uses the dependency 'express' here
const pies = require('./controllers/piecontroller');
const user = require('./controllers/usercontroller');
const sequelize = require('./db');


sequelize.sync();
app.use(express.json());

app.use(require('./middleware/headers'));

app.use('/pies', pies); //specifying the route for the variable pies
app.use('/auth', user);

//app.get('/pies', (req, res) => res.send('I love pie!')); moved to piecontroller.js
//get request to http://localhost:3000/pies
// Postman output: I love pie!

// app.use(express.static(__dirname + '/public')); //__dirname is the pathway and that is pre-set variable in Node
// console.log(__dirname);
// app.get('/', (req, res) => res.render('index')); //tells us to go to the index page and display what is on the index page in Postman

app.listen(process.env.PORT, () => console.log(`App is listening on port ${process.env.PORT}.`));
/* process.env.PORT is importing the port number from the dotenv file, which is part of the dotenv package*/


