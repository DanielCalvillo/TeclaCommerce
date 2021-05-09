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
    constructor(id, titulo, precio, img){
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        this.img = img;
    }
}

//PRODUCTOS GENERALES

let ProductosGen = {}

const nuevoProductoGen = function (id, titulo, precio, img){
    ProductosGen[id] = new Producto (id, titulo, precio, img) 
}

async function getApiGen(){
    const url = buscarCategoria + productosGenerales
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

async function getProductosGen(){
    let producGen = await getApiGen();
    return producGen;
}

//PRODUCTOS ACCESORIOS PARA CONSOLAS

let ProductosAccesoriosConsolas = {}

const nuevoProductoAccsConsolas = function (id, titulo, precio, img){
    ProductosAccesoriosConsolas[id] = new Producto (id, titulo, precio, img) 
}

async function getApiAccsConsolas(){
    const url = buscarCategoria + productosAccsConsolas
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

async function getProductosAccsConsolas(){
    let producAccsConsolas = await getApiAccsConsolas();
    return producAccsConsolas;
} 

//PRODUCTOS ACCESORIOS PARA PC

let ProductosAccesoriosPc = {}

const nuevoProductoAccsPc = function (id, titulo, precio, img){
    ProductosAccesoriosPc[id] = new Producto (id, titulo, precio, img) 
}

async function getApiAccsPc(){
    const url = buscarCategoria + productosAccsPc
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

async function getProductosAccsPc(){
    let producAccesoriosPc = await getApiAccsPc();
    return producAccesoriosPc;
}

//PRODUCTOS CONSOLAS

let ProductosConsolas = {}

const nuevoProductoConsola = function (id, titulo, precio, img){
    ProductosConsolas[id] = new Producto (id, titulo, precio, img) 
}

async function getApiConsolas(){
    const url = buscarCategoria + productosConsolas
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

async function getProductosConsolas(){
    let producConsolas = await getApiConsolas();
    return producConsolas;
}

//PRODUCTOS MAQUINITAS

let ProductosMaquinitas = {}

const nuevoProductoMaquinitas = function (id, titulo, precio, img){
    ProductosMaquinitas[id] = new Producto (id, titulo, precio, img) 
}

async function getApiMaquinitas(){
    const url = buscarCategoria + productosMaquinitas
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

async function getProductosMaquinitas(){
    let producMaquinitas = await getApiMaquinitas();
    return producMaquinitas;
}

//PRODUCTOS REPUESTOS PARA CONSOLAS

let ProductosRepuestos = {}

const nuevoProductoRepuesto = function (id, titulo, precio, img){
    ProductosRepuestos[id] = new Producto (id, titulo, precio, img) 
}

async function getApiRepuestos(){
    const url = buscarCategoria + productosRepuestos
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

async function getProductosRepuestos(){
    let producRepuestos = await getApiRepuestos();
    return producRepuestos;
}

//PRODUCTOS VIDEOJUEGOS

let ProductosVideojuegos = {}

const nuevoProductoVideojuegos = function (id, titulo, precio, img){
    ProductosVideojuegos[id] = new Producto (id, titulo, precio, img) 
}

async function getApiVideojuegos(){
    const url = buscarCategoria + productosVideojuegos
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

async function getProductosVideojuegos(){
    let producVideojuegos = await getApiVideojuegos();
    return producVideojuegos;
}

//PRODUCTOS OTROS

let ProductosOtros = {}

const nuevoProductoOtros = function (id, titulo, precio, img){
    ProductosOtros[id] = new Producto (id, titulo, precio, img) 
}

async function getApiOtros(){
    const url = buscarCategoria + productosOtros
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

async function getProductosOtros(){
    let producOtros = await getApiOtros();
    return producOtros;
}

//EXPORTAMOS LA RESPUESTA PARA NUESTRA API
//EXPORTAMOS EL RESULTADO DE LA CONSULTA A LA API CON LOS PRODUCTOS, 
//LA FUNCIÓN PARA CREAR UN NUEVO PRODUCTO Y EL OBJETO DE CADA TIPO DE PRODUCTO
module.exports = {Respuesta, getProductosGen, nuevoProductoGen, ProductosGen,
                getProductosAccsConsolas, nuevoProductoAccsConsolas, ProductosAccesoriosConsolas,
                getProductosAccsPc, nuevoProductoAccsPc, ProductosAccesoriosPc,
                getProductosConsolas, nuevoProductoConsola, ProductosConsolas,
                getProductosMaquinitas, nuevoProductoMaquinitas, ProductosMaquinitas,
                getProductosRepuestos, nuevoProductoRepuesto, ProductosRepuestos,
                getProductosVideojuegos, nuevoProductoVideojuegos, ProductosVideojuegos,
                getProductosOtros, nuevoProductoOtros, ProductosOtros}