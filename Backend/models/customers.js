const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../db/conexion');

class Customers extends Model {}

Customers.init({
    custom_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user: {
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
    zip: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    sequelize,
    modelName: 'Customers'
})

module.exports = Customers