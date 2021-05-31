const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/conexion')
const Categories = require('./categories')
const Customers = require('./customers')

class Products extends Model {}

Products.init({
    //Model attributes are defined here
    product_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    categorie_id: {
        type: DataTypes.STRING,
        allowNull: false
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