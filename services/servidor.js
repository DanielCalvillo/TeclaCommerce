//REQUERIR LIBRERÍAS
const express = require('express')
const app = express();
require('dotenv').config();
const productos = require('../db/dbproductos');

//GLOBAL
app.use(express.json())

//INICIAR EL SERVIDOR
app.listen(process.env.PORT, ()=> {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`)
})


// *********INICIAR NUESTROS REPOSITORIOS*********


//ALMACEN DE PRODUCTOS
app.get('/', async function(req, res){
    let resultadoProductosGen = await productos.getProductosGen();
    let resultadoProductosAccsConsolas = await productos.getProductosAccsConsolas();
    let resultadoProductosAccsPc = await productos.getProductosAccsPc();
    let resultadoProductosConsolas = await productos.getProductosConsolas();
    let resultadoProductosMaquinitas = await productos.getProductosMaquinitas();
    let resultadoProductosRepuestos = await productos.getProductosRepuestos();
    let resultadoProductosVideojuegos = await productos.getProductosVideojuegos();
    let resultadoProductosOtros = await productos.getProductosOtros();
    productos.Respuesta = {
        codigo: 200,
        error: false,
        generales: resultadoProductosGen.results,
        accsconsolas: resultadoProductosAccsConsolas.results,
        accspc: resultadoProductosAccsPc.results,
        consolas: resultadoProductosConsolas.results,
        maquinitas: resultadoProductosMaquinitas.results,
        repuestos: resultadoProductosRepuestos.results,
        videojuegos: resultadoProductosVideojuegos.results,
        otros: resultadoProductosOtros.results
    }
    // console.log('Hola')
    res.send(productos.Respuesta);
    for(let i=0; i < 8; i++){
        productos.nuevoProductoGen(resultadoProductosGen.results[i].id,resultadoProductosGen.results[i].title,resultadoProductosGen.results[i].price, resultadoProductosGen.results[i].thumbnail );
        productos.nuevoProductoAccsConsolas(resultadoProductosAccsConsolas.results[i].id,resultadoProductosAccsConsolas.results[i].title,resultadoProductosAccsConsolas.results[i].price, resultadoProductosAccsConsolas.results[i].thumbnail );
        productos.nuevoProductoAccsPc(resultadoProductosAccsPc.results[i].id,resultadoProductosAccsPc.results[i].title,resultadoProductosAccsPc.results[i].price, resultadoProductosAccsPc.results[i].thumbnail );
        productos.nuevoProductoConsola(resultadoProductosConsolas.results[i].id,resultadoProductosConsolas.results[i].title,resultadoProductosConsolas.results[i].price, resultadoProductosConsolas.results[i].thumbnail );
        productos.nuevoProductoMaquinitas(resultadoProductosMaquinitas.results[i].id,resultadoProductosMaquinitas.results[i].title,resultadoProductosMaquinitas.results[i].price, resultadoProductosMaquinitas.results[i].thumbnail );
        productos.nuevoProductoRepuesto(resultadoProductosRepuestos.results[i].id,resultadoProductosRepuestos.results[i].title,resultadoProductosRepuestos.results[i].price, resultadoProductosRepuestos.results[i].thumbnail );
        productos.nuevoProductoVideojuegos(resultadoProductosVideojuegos.results[i].id,resultadoProductosVideojuegos.results[i].title,resultadoProductosVideojuegos.results[i].price, resultadoProductosVideojuegos.results[i].thumbnail );
        productos.nuevoProductoOtros(resultadoProductosOtros.results[i].id,resultadoProductosOtros.results[i].title,resultadoProductosOtros.results[i].price, resultadoProductosOtros.results[i].thumbnail );
    }
})

//PRODUCTOS GENERALES
app.get('/productos', function (req, res) {
    res.send(productos.ProductosGen)
})

//ACCESORIOS PARA CONSOLAS
app.get('/productos/accsconsolas', function (req, res){
    res.send(productos.ProductosAccesoriosConsolas)
})

//ACCESORIOS PARA PC
app.get('/productos/accspc', function (req, res){
    res.send(productos.ProductosAccesoriosPc)
})

//CONSOLAS
app.get('/productos/consolas', function (req, res){
    res.send(productos.ProductosConsolas)
})

//MAQUINITAS
app.get('/productos/maquinitas', function (req, res){
    res.send(productos.ProductosMaquinitas)
})

//REPUESTOS
app.get('/productos/repuestos', function (req, res){
    res.send(productos.ProductosRepuestos)
})

//VIDEOJUEGOS
app.get('/productos/videojuegos', function (req, res){
    res.send(productos.ProductosVideojuegos)
})

//OTROS
app.get('/productos/otros', function (req, res){
    res.send(productos.ProductosOtros)
})