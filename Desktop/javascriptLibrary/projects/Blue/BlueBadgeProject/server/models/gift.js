 module.exports = (sequelize, DataTypes) => {
    const Gift = sequelize.define('gift', {
        recipient: {
            type: DataTypes.STRING,
            allowNull: false
        },
        giftItem: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        storagePlace: {
            type: DataTypes.STRING,
            allowNull: false
        },
        purchaseAt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wrappedIn: {
            type: DataTypes.STRING,
            allowNull: true
        },
        delivered: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER
        }
    })
    return Gift;
}