//1
const Sequelize = require('sequelize');

        //2             //3        //4           //5         //6
const sequelize = new Sequelize('workoutlog', 'postgres', 'jules331', {
    host: 'localhost', //7
    dialect: 'postgres' //8
});
  //9        //10         //11
sequelize.authenticate().then(
    function() { //12
        console.log('Connected to workoutlog postgres database');
    },
    function(err) { //13
        console.log(err);
    }
);
                   //14
module.exports = sequelize;

/* Analysis

1. Import the Sequelize pkg
2. create an instance of Sequelize for use in the module with the sequelize variable. 
3. use the constructor to create a new SQL object
4. ID the DB table to connect to.
5. The username for the db
6. The pw for the db
7. The host points to the local port for Sequelize. This is 5432.
8. ID the QL dialect being uesed.
9. use the sequelize variable to access methods
10. Call the authenticate() method
11. autenticate() returns a promise. use .then().
12. Fire a function that shows if we're connected.
13. Fire an error if there are any errors.
14. Export the module.

Then do some configuration in the app.js file. */