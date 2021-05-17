require('dotenv').config()
const express = require('express');
const app = express()
const sequelize = require('./db/conexion')
// const productosRouter = require('./routes/productos.routes');

//Middleware globales
app.use(express.json())

//Iniciamos nuestro servidor

async function inicioServidor() {
    try{
        await sequelize.authenticate();
        console.log('Conexiòn con la DB correcta!')
        app.listen(process.env.PORT, function (){
            console.log(`Sistema iniciado en el puerto ${process.env.PORT}`)
        })
    } catch (err) {
        console.log(err)
        console.log('No se pudo conectar con la DB')
    }
}

inicioServidor()