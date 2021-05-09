//REQUERIR LIBRERÍAS
const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors');
const productos = require('../db/dbproductos');
const categorias = require('../db/dblstcategorias');

//GLOBAL
app.use(express.json());
app.use(cors());

//INICIAR EL SERVIDOR
app.listen(process.env.PORT, ()=> {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`)
})


// *********INICIAR NUESTROS REPOSITORIOS*********


//ALMACEN DE PRODUCTOS y LISTA DE CATEGORIAS
app.get('', async function(req, res){
    let listCategorias = await categorias.getListCategorias();
    let resultadoProductosGen = await productos.getProductosGen();
    let resultadoProductosAccsConsolas = await productos.getProductosAccsConsolas();
    let resultadoProductosAccsPc = await productos.getProductosAccsPc();
    let resultadoProductosConsolas = await productos.getProductosConsolas();
    let resultadoProductosMaquinitas = await productos.getProductosMaquinitas();
    let resultadoProductosRepuestos = await productos.getProductosRepuestos();
    let resultadoProductosVideojuegos = await productos.getProductosVideojuegos();
    let resultadoProductosOtros = await productos.getProductosOtros();

    //SE CONFIGURA LA RESPUESTA CON LO QUE SE OBTUVO DE LA API
    productos.Respuesta = {
        codigo: 200,
        error: false,
        lstcategorias: listCategorias.children_categories,
        generales: resultadoProductosGen.results,
        accsconsolas: resultadoProductosAccsConsolas.results,
        accspc: resultadoProductosAccsPc.results,
        consolas: resultadoProductosConsolas.results,
        maquinitas: resultadoProductosMaquinitas.results,
        repuestos: resultadoProductosRepuestos.results,
        videojuegos: resultadoProductosVideojuegos.results,
        otros: resultadoProductosOtros.results
    }
    // SE ENVÍA LA RESPUESTA
    res.send(productos.Respuesta);
    //SE GUARDA EN  dblstcategorias.js  EL ID Y EL NOMBRE DE LAS SUBCATEGORÍAS DE LA API
    for(let x=0; x < listCategorias.children_categories.length; x++){
        categorias.nuevaCategoria(listCategorias.children_categories[x].id, listCategorias.children_categories[x].name, x);
    }
    //SE GUARDAN LOS 8 PRIMEROS PRODUCTOS DE LA CATEGORÍA EN GENERAL Y DE CADA SUBCATEGORÍA
    //CON ID, TÍTULO, PRECIO E IMAGEN
    for(let i=0; i < 8; i++){
        productos.nuevoProductoGen(resultadoProductosGen.results[i].id, resultadoProductosGen.results[i].title, resultadoProductosGen.results[i].price, resultadoProductosGen.results[i].thumbnail, i);
        productos.nuevoProductoAccsConsolas(resultadoProductosAccsConsolas. results[i].id,resultadoProductosAccsConsolas.results[i].title, resultadoProductosAccsConsolas.results[i].price, resultadoProductosAccsConsolas.results[i].thumbnail, i);
        productos.nuevoProductoAccsPc(resultadoProductosAccsPc.results[i].id, resultadoProductosAccsPc.results[i].title, resultadoProductosAccsPc.results[i].price, resultadoProductosAccsPc.results[i].thumbnail, i);
        productos.nuevoProductoConsola(resultadoProductosConsolas.results[i].id, resultadoProductosConsolas.results[i].title, resultadoProductosConsolas.results[i].price, resultadoProductosConsolas.results[i].thumbnail, i);
        productos.nuevoProductoMaquinitas(resultadoProductosMaquinitas.results[i].id, resultadoProductosMaquinitas.results[i].title, resultadoProductosMaquinitas.results[i].price, resultadoProductosMaquinitas.results[i].thumbnail, i);
        productos.nuevoProductoRepuesto(resultadoProductosRepuestos.results[i].id, resultadoProductosRepuestos.results[i].title, resultadoProductosRepuestos.results[i].price, resultadoProductosRepuestos.results[i].thumbnail, i);
        productos.nuevoProductoVideojuegos(resultadoProductosVideojuegos.results[i].id, resultadoProductosVideojuegos.results[i].title, resultadoProductosVideojuegos.results[i].price, resultadoProductosVideojuegos.results[i].thumbnail, i);
        productos.nuevoProductoOtros(resultadoProductosOtros.results[i].id, resultadoProductosOtros.results[i].title, resultadoProductosOtros.results[i].price, resultadoProductosOtros.results[i].thumbnail, i);
    }
})

//LISTA DE CATEGORIAS
app.get('/categorias', function (req, res) {
    res.send(categorias.ListCategorias)
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