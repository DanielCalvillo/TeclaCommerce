//REQUERIR LIBRERÍAS
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const productos = require('../db/dbproductos');
const categorias = require('../db/dblstcategorias');
const middcategorias = require('../middleware/middcategorias');
const middproductos = require('../middleware/middproductos');
const accesos = require('../middleware/middacceso');

const { Carrito, agregarCarrito } = require('../db/dbcarrito')

//GLOBAL
app.use(express.json());
app.use(cors());
app.use(accesos.limiter);

//INICIAR EL SERVIDOR
app.listen(process.env.PORT, ()=> {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`)
})

//ERRORES GLOBALES
app.use((err, req, res, next) =>{
    if(err){
        console.log(err);
        if(!res.headerSent){
            res.status(500).send("Error en el servidor: " + err.message);
        }
    }
    next();
})


// *********INICIAR NUESTROS REPOSITORIOS*********


//ALMACEN DE PRODUCTOS y LISTA DE CATEGORIAS
app.get('', async function(req, res){
    try {
        let listCategorias = await middcategorias.tomarCategorias();
        let resultadoProductosGen = await middproductos.getProductosGen();
        let resultadoProductosAccsConsolas = await middproductos.getProductosAccsConsolas();
        let resultadoProductosAccsPc = await middproductos.getProductosAccsPc();
        let resultadoProductosConsolas = await middproductos.getProductosConsolas();
        let resultadoProductosMaquinitas = await middproductos.getProductosMaquinitas();
        let resultadoProductosRepuestos = await middproductos.getProductosRepuestos();
        let resultadoProductosVideojuegos = await middproductos.getProductosVideojuegos();
        let resultadoProductosOtros = await middproductos.getProductosOtros();
        
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
    } catch (error) {
        console.log('Error desde el get');
        console.log(error);
        res.status(400).json(error.message);
    }
})

//LISTA DE CATEGORIAS
app.get('/categorias', cors(accesos.accesoPuertos), function (req, res) {
    try {
        res.send(categorias.ListCategorias)
    } catch (error) {
        console.log('Acceso denegado en Categorias');
        console.log(error);
        res.status(401).json(error.message);
    }
    
})

//PRODUCTOS GENERALES
app.get('/productos', cors(accesos.accesoPuertos), function (req, res) {
    try {
        res.send(productos.ProductosGen)
    } catch (error) {
        console.log('Acceso denegado en Productos Generales');
        console.log(error);
        res.status(401).json(error.message);
    }
})

//ACCESORIOS PARA CONSOLAS
app.get('/productos/accsconsolas', cors(accesos.accesoPuertos), function (req, res){
    try {
        res.send(productos.ProductosAccesoriosConsolas)
    } catch (error) {
        console.log('Acceso denegado en Consolas');
        console.log(error);
        res.status(401).json(error.message);
    }  
})

//ACCESORIOS PARA PC
app.get('/productos/accspc', cors(accesos.accesoPuertos), function (req, res){
    try {
        res.send(productos.ProductosAccesoriosPc);
    } catch (error) {
        console.log('Acceso denegado en Accesorios para PC');
        console.log(error);
        res.status(401).json(error.message);
    }
    
})

//CONSOLAS
app.get('/productos/consolas', cors(accesos.accesoPuertos), function (req, res){
    try {
        res.send(productos.ProductosConsolas)
    } catch (error) {
        console.log('Acceso denegado en Accesorios para Consolas');
        console.log(error);
        res.status(401).json(error.message);
    }
    
})

//MAQUINITAS
app.get('/productos/maquinitas', cors(accesos.accesoPuertos), function (req, res){
    try {
        res.send(productos.ProductosMaquinitas)
    } catch (error) {
        console.log('Acceso denegado en Accesorios para Maquinitas');
        console.log(error);
        res.status(401).json(error.message);
    }
    
})

//REPUESTOS
app.get('/productos/repuestos', cors(accesos.accesoPuertos), function (req, res){
    try {
        res.send(productos.ProductosRepuestos)
    } catch (error) {
        console.log('Acceso denegado en Accesorios para Repuestos');
        console.log(error);
        res.status(401).json(error.message);
    }
    
})

//VIDEOJUEGOS
app.get('/productos/videojuegos', cors(accesos.accesoPuertos), function (req, res){
    try {
        res.send(productos.ProductosVideojuegos)
    } catch (error) {
        console.log('Acceso denegado en Accesorios para Videojugos');
        console.log(error);
        res.status(401).json(error.message);
    }
    
})

//OTROS
app.get('/productos/otros', cors(accesos.accesoPuertos), function (req, res){
    try {
        res.send(productos.ProductosOtros)
    } catch (error) {
        console.log('Acceso denegado en Accesorios para Otros');
        console.log(error);
        res.status(401).json(error.message);
    }
    
})

app.get('/productos/carrito', cors(accesos.accesoPuertos), function(req, res) {
    try{
        res.status(200).json(Carrito)
    }catch (error) {
        console.log('Acceso denegado en Productos Carrito')
        console.error(error);
        res.status(401).json(error.message)
    }
})

app.post('/productos/carrito', cors(accesos.accesoPuertos), async function (req, res) {
    try{
        await agregarCarrito(req.body.id, req.body.titulo, req.body.precio, req.body.img)
        console.log(Carrito)
        res.status(200).json(Carrito)
    }catch (error) {
        console.log('Acceso denegado en Postear Producto al Carrito')
        console.error(error);
        res.status(401).json(error.message)
    }
})