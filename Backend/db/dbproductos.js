//LIBRERÍAS
const fetch = require('node-fetch');

//VARS PARA CONSULTA
let buscarCategoria = 'https://api.mercadolibre.com/sites/MLM/search?category=';
let productosGenerales = 'MLM1144';
let productosAccsConsolas = 'MLM438578';
let productosAccsPc = 'MLM123324';
let productosConsolas = 'MLM167860';
let productosMaquinitas = 'MLM8232';
let productosRepuestos = 'MLM438579';
let productosVideojuegos = 'MLM151595';
let productosOtros = 'MLM1152';

let Respuesta = {
    codigo: 200,
    error: false,
    lstcategorias: '',
    generales: '',
    accsconsolas: '',
    accspc: '',
    consolas: '',
    maquinitas: '',
    repuestos: '',
    videojuegos: '',
    otros: ''
}

//CLASE PRODUCTO
class Producto {
    constructor(id, titulo, precio, img, i){
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        this.img = img;
        this.i = i;
    }
}

//PRODUCTOS GENERALES

let ProductosGen = {}

const nuevoProductoGen = function (id, titulo, precio, img, i){
    ProductosGen[i] = new Producto (id, titulo, precio, img) 
}

async function getApiGen(){
    const url = buscarCategoria + productosGenerales
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}



//PRODUCTOS ACCESORIOS PARA CONSOLAS

let ProductosAccesoriosConsolas = {}

const nuevoProductoAccsConsolas = function (id, titulo, precio, img, i){
    ProductosAccesoriosConsolas[i] = new Producto (id, titulo, precio, img) 
}

async function getApiAccsConsolas(){
    const url = buscarCategoria + productosAccsConsolas
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}



//PRODUCTOS ACCESORIOS PARA PC

let ProductosAccesoriosPc = {}

const nuevoProductoAccsPc = function (id, titulo, precio, img, i){
    ProductosAccesoriosPc[i] = new Producto (id, titulo, precio, img) 
}

async function getApiAccsPc(){
    const url = buscarCategoria + productosAccsPc
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}



//PRODUCTOS CONSOLAS

let ProductosConsolas = {}

const nuevoProductoConsola = function (id, titulo, precio, img, i){
    ProductosConsolas[i] = new Producto (id, titulo, precio, img) 
}

async function getApiConsolas(){
    const url = buscarCategoria + productosConsolas
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}



//PRODUCTOS MAQUINITAS

let ProductosMaquinitas = {}

const nuevoProductoMaquinitas = function (id, titulo, precio, img, i){
    ProductosMaquinitas[i] = new Producto (id, titulo, precio, img) 
}

async function getApiMaquinitas(){
    const url = buscarCategoria + productosMaquinitas
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}



//PRODUCTOS REPUESTOS PARA CONSOLAS

let ProductosRepuestos = {}

const nuevoProductoRepuesto = function (id, titulo, precio, img, i){
    ProductosRepuestos[i] = new Producto (id, titulo, precio, img) 
}

async function getApiRepuestos(){
    const url = buscarCategoria + productosRepuestos
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}



//PRODUCTOS VIDEOJUEGOS

let ProductosVideojuegos = {}

const nuevoProductoVideojuegos = function (id, titulo, precio, img, i){
    ProductosVideojuegos[i] = new Producto (id, titulo, precio, img) 
}

async function getApiVideojuegos(){
    const url = buscarCategoria + productosVideojuegos
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}



//PRODUCTOS OTROS

let ProductosOtros = {}

const nuevoProductoOtros = function (id, titulo, precio, img, i){
    ProductosOtros[i] = new Producto (id, titulo, precio, img) 
}

async function getApiOtros(){
    const url = buscarCategoria + productosOtros
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}



//FUNCION FALLA
function fallaProductos (){
    throw new Error('No es posible acceder en este momento');
}

//FUNCION FALLA DE AUTENTICACION
function fallaAutorizacion (){
    throw new Error('No tienes los permisos necesarios para poder acceder');
}

//EXPORTAMOS LA RESPUESTA PARA NUESTRA API
//EXPORTAMOS EL RESULTADO DE LA CONSULTA A LA API CON LOS PRODUCTOS, 
//LA FUNCIÓN PARA CREAR UN NUEVO PRODUCTO Y EL OBJETO DE CADA TIPO DE PRODUCTO
//Y LAS FUNCIONES DE FALLA AL HACER GET Y A LA AUTORIZACION
module.exports = {Respuesta, getApiGen, nuevoProductoGen, ProductosGen,
                getApiAccsConsolas, nuevoProductoAccsConsolas, ProductosAccesoriosConsolas,
                getApiAccsPc, nuevoProductoAccsPc, ProductosAccesoriosPc,
                getApiConsolas, nuevoProductoConsola, ProductosConsolas,
                getApiMaquinitas, nuevoProductoMaquinitas, ProductosMaquinitas,
                getApiRepuestos, nuevoProductoRepuesto, ProductosRepuestos,
                getApiVideojuegos, nuevoProductoVideojuegos, ProductosVideojuegos,
                getApiOtros, nuevoProductoOtros, ProductosOtros,
                fallaProductos, fallaAutorizacion}