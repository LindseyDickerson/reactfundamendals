module.exports = (sequelize, DataTypes) => {
   const User = sequelize.define('user', {
    username: DataTypes.STRING, 
    passwordhash: DataTypes.STRING 
 })
return User;
};