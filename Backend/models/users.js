const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/conexion')

class Users extends Model {}

Users.init({
    //Model attributes are defined here
    user_id: {
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
}, {
    sequelize,
    modelName: 'Users'
})

module.exports = Users