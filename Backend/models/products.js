const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/conexion')

class Products extends Model {}

Products.init({
    //Model attributes are defined here
    product_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Products'
})

module.exports = Products