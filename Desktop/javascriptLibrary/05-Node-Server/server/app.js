require('dotenv').config(); //putting this here makes items in the .env file available for the whole application

var express = require('express'); //1
var app = express(); //2
var test = require('./controllers/testcontroller.js'); //Added this in after creating the testcontroller.js file
var authTest = require('./controllers/authtestcontroller');

var user = require('./controllers/usercontroller.js');
var sequelize = require('./db'); // Create a sequelize variable that imports the db file

//3         //4
// app.listen(3000, function(){
//     console.log('Hey it works!') //5
// });

// 1. require the use of the 'express' npm package installed in dependencies. 
// 2. Create an instance of express. Using a top-level express() function, exported by the Express module. This allows us to create an Express app. 
// 3. app.listen will use express to start a UNIX socket and listen for connections on the given path. This method is identical to Node's 'http.Server.listen()'.
// 4. The given path is localhost:3000.
// 5. We use a callback function when the connection happens with a console.log. 

// app.use('/api/test', function(req, res){
//     res.send("This is data from the /api/test endpoint. It's from the server.");
// });

sequelize.sync(); //use the sequelize variable and call .sync, to ensure that we sync all defined models into the DB.
express.json();
app.use(express.json()); //This app.use must go above any routes. Routes above this stmt will not be able to use the express.json function so they will break. 
app.use(require('./middleware/headers'));

/**********Exposed routes */
app.use('/test', test) /* call app.use and in the first parameter create a base url called /test. So the base URl in postman will be http://localhost:3000/test
For the second parameter for the use() function, pass in test. This means that all routes created in the testcontroller.js file will be sub-routes and can look like this:
http://localhost:3000/test or http://localhost:3000/test/
*/

app.use('/api/user', user);

/* Challenge: create a route to the endpoint http://localhost:3000/test/about and get a response saying 'This is an about route' */

// app.use('/test/about', test) //it worked! output: This is an about route

/* Challenge 2: Add 3 more routes: Contact, Projects, My Contacts */

app.use('/test/contact', test)
app.use('/test/projects', test)
app.use('/test/mycontacts', test)

/************Protected Routes */

app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

app.listen(3000, function(){
    console.log('App is listening on 3000.')
});