
var url = "https://api.mercadolibre.com/categories/" //POR QUÉ NO LET?
let idCategoria = "MLM1144"


var listCategorias = document.getElementById("categorias");

//LLAMADO DE SUBCATEGORIAS (TITULOS)
async function getCategorias(url) {
    let parseJson = [];
    
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
        linkCategoria.style.fontSize = '14px'
        linkCategoria.style.textAlign = 'center'

        linkCategoria.textContent = `${categorias.children_categories[index].name}`

        divCategoria.appendChild(linkCategoria);
        listCategorias.appendChild(divCategoria)
    }
}

//TODOS LOS PRODUCTOS DE LA CATEGORIA
async function getProductos(url) {
    let resultado = await fetch(url + "MLA/search?category=MLA1055&sold_quality=10");
    let parseJson = await resultado.json();
    return parseJson
}

async function asignarProductos(url) {
    let productos = await getProductos(url);
    let listaDeProductos = productos.results
    for (let x = 0; x < 8; x++) {
        console.log(listaDeProductos[x])
    }
}

asignarCategorias(url)
asignarProductos(url)