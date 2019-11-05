const Sequelize = require('sequelize');

const sequelize = new Sequelize('selfworkoutlog', 'postgres', 'jules331', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to selfworkoutlog postgres database');
    }, 
    function(err) {
        console.log(err);
    }
);
module.exports = sequelize;