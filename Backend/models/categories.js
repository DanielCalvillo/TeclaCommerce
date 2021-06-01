const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/conexion')


class Categories extends Model {}

Categories.init({
    //Model attributes are defined here
    categorie_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    id_market: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Categories'
})


module.exports = Categories