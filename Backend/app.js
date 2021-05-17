require('dotenv').config()
const express = require('express');
const app = express()
const sequelize = require('./db/conexion')
const router = require('./routes/routes');


//Import Models
const Products = require('./models/products')

//Middleware globales
app.use(express.json())

app.get('/', (req, res) => {
    res.send('✅ - Server is up and running !!');
  });
  

app.use('/api/v1', router);

//Iniciamos nuestro servidor

// await sequelize.sync({ force: true });
// console.log('All models were synchronized successfully')

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

async function synchronizeTables() {
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully')
}
inicioServidor()

// Run this function if your database is not synchronized
// synchronizeTables()