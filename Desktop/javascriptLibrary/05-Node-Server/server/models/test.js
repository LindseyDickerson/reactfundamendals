     //7                         //1
module.exports = function (sequelize, DataTypes) {
                      //2     //3
    return sequelize.define('test', { //4
     //5        //6
    testdata: DataTypes.STRING
    });
};

// Analysis
// 1. Run anon function with 2 parameters: sequelize & DataTypes. The functionwill return the value of what is created by sequelize.define .
// 2. Use sequelize object to call the define method. .define() is a sql method that will map model properties in the server file to a table in postgres.
// 3. In the first argument of the define method, we pass in the string test. This will become a table called tests in PG.
// 4. Second argument of the define function is an object. Any key/value pairs in the following object will become columns of the table. 
// 5. testdata is a key in our model object that will be a column in our database.
// 6. DataTypes.STRING is our value for the testdata property. Because we define it as a string value in the model, any info to be held in that column must be a string. DataTypes is a parameter in the function brought in through SQL. 
// 7. The model is exported to allow SQL to create the tests table with the testdata column next tim ethe server connects to the db and a user makes a POST request that uses the model.
