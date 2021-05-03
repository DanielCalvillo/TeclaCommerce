
var url = "https://api.mercadolibre.com/categories/" 
var idCategoria = "MLM1144"


var listCategorias = document.getElementById("categorias");


async function getCategorias(url) {
    let parseJson;
    
    try {
        let getCategorias = await fetch(url + idCategoria);
        parseJson = await getCategorias.json()
        return parseJson
    } catch (error) {
        if(parseJson.length === 0){
            console.log('Error al consumir la API')
        }else{
            console.log('No existen datos');
            console.log(parseJson.message);
        }
    }
}

async function asignarCategorias(url) {
    let categorias = await getCategorias(url);
    let subCategorias = categorias.children_categories;
    for (let index = 0; index < subCategorias.length; index++) {
        let divCategoria = document.createElement('li')
        divCategoria.setAttribute('class', "nav-item")

        let linkCategoria = document.createElement('a')
        linkCategoria.setAttribute('class', 'nav-link')
        linkCategoria.style.fontSize = '18px'
        linkCategoria.style.textAlign = 'left'
        divCategoria.style.listStyleType = 'none'
        divCategoria.style.textAlign = 'left'

        linkCategoria.textContent = `${categorias.children_categories[index].name}`

        divCategoria.appendChild(linkCategoria);
        listCategorias.appendChild(divCategoria)
    }
}

let urlProductos = 'https://api.mercadolibre.com/sites/MLM/search?category=';
let idProductos = 'MLM1144';

async function getProductos(url) {
    let parseJson = [];
    try {
        let resultado = await fetch(urlProductos + idProductos);
        parseJson = await resultado.json();
        return parseJson
    } catch (error) {
        if(parseJson.length === 0){
            console.log('Error al consumir la API')
        }else{
            console.log('No existen datos');
            console.log(parseJson.message);
        }
    }

}

async function asignarProductos(url) {
    let productos = await getProductos(url);
    let listaDeProductos = productos.results;
    console.log(listaDeProductos)
    for (let x = 0; x < 8; x++) {
        console.log(listaDeProductos[x])
    }
}

asignarCategorias(url)
asignarProductos(url)