const Sequelize = require('sequelize');

const sequelize = new Sequelize('teclacommerce', null, null, {
    dialect: 'mssql',
    server: process.env.DB_HOST,
    port: process.env.DB_PORT,

  })