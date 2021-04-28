
var url = "https://api.mercadolibre.com/sites/"


var listCategorias = document.getElementById("categorias");


async function getCategorias(url) {
    let resultado = await fetch(url + "MLA/categories");
    let parseJson = await resultado.json()
    return parseJson
}

async function asignarCategorias(url) {
    let categorias = await getCategorias(url)
    for (categoria in categorias) {
        let divCategoria = document.createElement('li')
        divCategoria.setAttribute('class', "nav-item")

        let linkCategoria = document.createElement('a')
        linkCategoria.setAttribute('class', 'nav-link')
        linkCategoria.style.fontSize = '14px'
        linkCategoria.style.textAlign = 'center'

        linkCategoria.textContent = `${categorias[categoria].name}`

        divCategoria.appendChild(linkCategoria);
        listCategorias.appendChild(divCategoria)
    }
}

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