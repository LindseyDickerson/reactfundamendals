require('dotenv').config(); //requiring the .env file
const express = require('express'); //setting dependency to variable
const app = express(); //using dependency 'express
const gifts = require('./controllers/giftcontroller');
const user = require('./controllers/usercontroller');
const sequelize = require('./db');

sequelize.sync(); //to reset table pass in {force: true}, save, check pgAdmin, then take out and resave. THIS WILL RESET TABLES AND DATA CAN'T BE RECOVERED

app.use(express.json());
app.use(require('./middleware/headers'));

/********Exposed Route */
app.use('/api/user', user);
app.use('/api/test', function(req, res) {
    res.send('This is data from the /api/test endpoint on the server.');
});

/*********Protected Route */
app.use(require('./middleware/validate-session'));
app.use('/api/gift', gifts);

app.listen(process.env.PORT, () => console.log(`App is listening on Port ${process.env.PORT}.`));