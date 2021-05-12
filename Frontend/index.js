//require('dotenv').config();

/* 
var url = process.env.URL_CATEGORIAS
var idCategoria = process.env.URL_CATEGORIA */
var productos = []

var url = "https://api.mercadolibre.com/categories/"
var idCategoria = "MLM1144"


var listaProductos = document.getElementById("main-products");

let urlProductos = 'https://api.mercadolibre.com/sites/MLM/search?category=';
let idProductos = 'MLM1144';
// PRUEBA  http://localhost:4000
async function getApiGen(){
    const url = 'http://localhost:4000/productos'
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

async function getProductosGen(){
    let producGen = await getApiGen();
    // console.log(`ESTOS SON LOS PRODUCTOS ${JSON.stringify(producGen)}`);
    return producGen
}

/* --------------------- LISTA DE CATEGORÍAS ------------------- */
var listCategorias = document.getElementById("categorias");

async function getCategorias(url) {
    let parseJson;

    try {
        let getCategorias = await fetch(url + idCategoria);
        parseJson = await getCategorias.json()
        return parseJson
    } catch (error) {
        if (parseJson.length === 0) {
            console.log('Error al consumir la API')
        } else {
            console.log('No existen datos');
            console.log(parseJson.message);
        }
    }
}

async function asignarCadaCategoria() {
    productos = []
    await asignarProductos(productos)
    console.log("asignando categoria")
}

async function asignarCategorias(url) {
    let categorias = await getCategorias(url);
    let subCategorias = categorias.children_categories;
    console.log(subCategorias)
    for (let index = 0; index < subCategorias.length; index++) {
        let divCategoria = document.createElement('li')
        divCategoria.setAttribute('class', "nav-item")

        let linkCategoria = document.createElement('a')
        linkCategoria.setAttribute('class', 'nav-link')
        linkCategoria.style.fontSize = '18px'
        linkCategoria.style.textAlign = 'left'
        divCategoria.style.listStyleType = 'none'
        divCategoria.style.textAlign = 'left'
        linkCategoria.addEventListener("click", asignarCadaCategoria);
        linkCategoria.textContent = `${categorias.children_categories[index].name}`

        divCategoria.appendChild(linkCategoria);
        listCategorias.appendChild(divCategoria)
    }
    productos = await getProductosGen();
    console.log(productos)
    await asignarProductos(productos)
}

/* --------------------- LISTA DE CATEGORÍAS ------------------- */


/* --------------------- LISTA DE PRODUCTOS POR CATEGORÍA ------------------- */

// let urlProductos = 'https://api.mercadolibre.com/sites/MLM/search?category=';
// let idProductos = 'MLM1144';

async function getProductos(url) {
    let parseJson;
    try {
        let resultado = await fetch(urlProductos + idProductos);
        parseJson = await resultado.json();
        return parseJson
    } catch (error) {
        if (parseJson.length === 0) {
            console.log('Error al consumir la API')
        } else {
            console.log('No existen datos');
            console.log(parseJson.message);
        }
    }

}



async function asignarProductos(productos) {

    for (let x = 0; x < 8; x++) {
        const producto = productos[x];
        let contenedorProducto = document.createElement('div');
        contenedorProducto.setAttribute('class', 'product-container')

        let tituloProducto = document.createElement('h2');
        tituloProducto.textContent = producto.titulo

        let imagenProducto = document.createElement('img');
        imagenProducto.setAttribute('src', producto.img)

        let precioProducto = document.createElement('span');
        precioProducto.textContent = `$${producto.precio}`

        contenedorProducto.appendChild(tituloProducto);
        contenedorProducto.appendChild(imagenProducto);
        contenedorProducto.appendChild(precioProducto);

        listaProductos.appendChild(contenedorProducto)


    }
}

asignarCategorias(url)



