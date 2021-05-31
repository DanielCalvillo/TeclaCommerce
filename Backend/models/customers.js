const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../db/conexion');
const Products = require('./products');

class Customers extends Model {}

Customers.init({
    customer_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postal_code: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    products: {
        type: DataTypes.JSON,
        allowNull: true
    }
},{
    sequelize,
    modelName: 'Customers'
})


module.exports = Customers