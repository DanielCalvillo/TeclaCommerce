//require('dotenv').config();

/* 
var url = process.env.URL_CATEGORIAS
var idCategoria = process.env.URL_CATEGORIA */
var productos = []

var url = "https://api.mercadolibre.com/categories/"
var idCategoria = "MLM1144"

var listaProductos = document.getElementById("main-products");

var listaAccConsolas = document.getElementById("accConsolas-products");

var listaAccPcgaming = document.getElementById("accPcGaming-products");

var listaConsolas = document.getElementById("consolas-products");

var listaMaquinitas = document.getElementById("maquinitas-products");

var listaRepuestos = document.getElementById("repuestos-products")

var listaVideojuegos = document.getElementById("videojuegos-products");

var listaOtros = document.getElementById("otros-productos")

//Agregar al carrito 

async function agregarProductoAlCarrito(producto) {

    const response = await fetch('http://localhost:5000/productos/carrito', {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(producto)
      });

    alert('Producto agregado exitosamente al carrito');
}


async function getApiGen(extra){
    let url = `http://localhost:5000/productos`
    if (extra) {
        url = `http://localhost:5000/productos/${extra}`
    }
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

async function getProductosGen(){
    let producGen = await getApiGen();
    return producGen;
}

function asignarProductosPorCategoria(listaDeProductos, index) {
    switch(index) {
        case 1:
            listaProductos.style.display = 'none'
            listaAccPcgaming.style.display = 'none'
            listaConsolas.style.display = 'none'
            listaMaquinitas.style.display = 'none'
            listaRepuestos.style.display = 'none'
            listaVideojuegos.style.display = 'none'
            listaOtros.style.display = 'none'
            listaAccConsolas.style.display = 'flex'
            for (let x = 0; x < 8; x++) {
                const producto = listaDeProductos[x];
                let contenedorProducto = document.createElement('div');
                contenedorProducto.setAttribute('class', 'product-container')

                let tituloProducto = document.createElement('h2');
                tituloProducto.textContent = producto.titulo

                let imagenProducto = document.createElement('img');
                imagenProducto.setAttribute('src', producto.img)

                let precioProducto = document.createElement('span');
                precioProducto.textContent = `$${producto.precio}`

                let buttonAgregar = document.createElement('button');
                buttonAgregar.textContent = "Agregar al carrito"
                buttonAgregar.addEventListener('click', () => agregarProductoAlCarrito(producto))

                contenedorProducto.appendChild(tituloProducto);
                contenedorProducto.appendChild(imagenProducto);
                contenedorProducto.appendChild(precioProducto);
                contenedorProducto.appendChild(buttonAgregar);

                listaAccConsolas.appendChild(contenedorProducto)
            }
            break;
        case 2:
            listaProductos.style.display = 'none'
            listaAccConsolas.style.display = 'none'
            listaConsolas.style.display = 'none'
            listaMaquinitas.style.display = 'none'
            listaRepuestos.style.display = 'none'
            listaVideojuegos.style.display = 'none'
            listaOtros.style.display = 'none'
            listaAccPcgaming.style.display = 'flex'
            for (let x = 0; x < 8; x++) {
                const producto = listaDeProductos[x];
                let contenedorProducto = document.createElement('div');
                contenedorProducto.setAttribute('class', 'product-container')

                let tituloProducto = document.createElement('h2');
                tituloProducto.textContent = producto.titulo

                let imagenProducto = document.createElement('img');
                imagenProducto.setAttribute('src', producto.img)

                let precioProducto = document.createElement('span');
                precioProducto.textContent = `$${producto.precio}`

                let buttonAgregar = document.createElement('button');
                buttonAgregar.textContent = "Agregar al carrito"
                buttonAgregar.addEventListener('click', () => agregarProductoAlCarrito(producto))

                contenedorProducto.appendChild(tituloProducto);
                contenedorProducto.appendChild(imagenProducto);
                contenedorProducto.appendChild(precioProducto);
                contenedorProducto.appendChild(buttonAgregar);

                listaAccPcgaming.appendChild(contenedorProducto)
            }
            break;
        case 3:
            listaProductos.style.display = 'none'
            listaAccPcgaming.style.display = 'none'
            listaAccConsolas.style.display = 'none'
            listaMaquinitas.style.display = 'none'
            listaRepuestos.style.display = 'none'
            listaVideojuegos.style.display = 'none'
            listaOtros.style.display = 'none'
            listaConsolas.style.display = 'flex'
            for (let x = 0; x < 8; x++) {
                const producto = listaDeProductos[x];
                let contenedorProducto = document.createElement('div');
                contenedorProducto.setAttribute('class', 'product-container')

                let tituloProducto = document.createElement('h2');
                tituloProducto.textContent = producto.titulo

                let imagenProducto = document.createElement('img');
                imagenProducto.setAttribute('src', producto.img)

                let precioProducto = document.createElement('span');
                precioProducto.textContent = `$${producto.precio}`

                let buttonAgregar = document.createElement('button');
                buttonAgregar.textContent = "Agregar al carrito"
                buttonAgregar.addEventListener('click', () => agregarProductoAlCarrito(producto))

                contenedorProducto.appendChild(tituloProducto);
                contenedorProducto.appendChild(imagenProducto);
                contenedorProducto.appendChild(precioProducto);
                contenedorProducto.appendChild(buttonAgregar);

                listaConsolas.appendChild(contenedorProducto)
            }
            break;
        case 4:
            listaProductos.style.display = 'none'
            listaAccPcgaming.style.display = 'none'
            listaConsolas.style.display = 'none'
            listaAccConsolas.style.display = 'none'
            listaRepuestos.style.display = 'none'
            listaVideojuegos.style.display = 'none'
            listaOtros.style.display = 'none'
            listaMaquinitas.style.display = 'flex'
            for (let x = 0; x < 8; x++) {
                const producto = listaDeProductos[x];
                let contenedorProducto = document.createElement('div');
                contenedorProducto.setAttribute('class', 'product-container')

                let tituloProducto = document.createElement('h2');
                tituloProducto.textContent = producto.titulo

                let imagenProducto = document.createElement('img');
                imagenProducto.setAttribute('src', producto.img)

                let precioProducto = document.createElement('span');
                precioProducto.textContent = `$${producto.precio}`

                let buttonAgregar = document.createElement('button');
                buttonAgregar.textContent = "Agregar al carrito"
                buttonAgregar.addEventListener('click', () => agregarProductoAlCarrito(producto))

                contenedorProducto.appendChild(tituloProducto);
                contenedorProducto.appendChild(imagenProducto);
                contenedorProducto.appendChild(precioProducto);
                contenedorProducto.appendChild(buttonAgregar);

                listaMaquinitas.appendChild(contenedorProducto)
            }
            break;
        case 5:
            listaProductos.style.display = 'none'
            listaAccPcgaming.style.display = 'none'
            listaConsolas.style.display = 'none'
            listaMaquinitas.style.display = 'none'
            listaAccConsolas.style.display = 'none'
            listaVideojuegos.style.display = 'none'
            listaOtros.style.display = 'none'
            listaRepuestos.style.display = 'flex'
            for (let x = 0; x < 8; x++) {
                const producto = listaDeProductos[x];
                let contenedorProducto = document.createElement('div');
                contenedorProducto.setAttribute('class', 'product-container')

                let tituloProducto = document.createElement('h2');
                tituloProducto.textContent = producto.titulo

                let imagenProducto = document.createElement('img');
                imagenProducto.setAttribute('src', producto.img)

                let precioProducto = document.createElement('span');
                precioProducto.textContent = `$${producto.precio}`

                let buttonAgregar = document.createElement('button');
                buttonAgregar.textContent = "Agregar al carrito"
                buttonAgregar.addEventListener('click', () => agregarProductoAlCarrito(producto))

                contenedorProducto.appendChild(tituloProducto);
                contenedorProducto.appendChild(imagenProducto);
                contenedorProducto.appendChild(precioProducto);
                contenedorProducto.appendChild(buttonAgregar);

                listaRepuestos.appendChild(contenedorProducto)
            }
            break;
        case 6:
            listaProductos.style.display = 'none'
            listaAccPcgaming.style.display = 'none'
            listaConsolas.style.display = 'none'
            listaMaquinitas.style.display = 'none'
            listaRepuestos.style.display = 'none'
            listaAccConsolas.style.display = 'none'
            listaOtros.style.display = 'none'
            listaVideojuegos.style.display = 'flex'
            for (let x = 0; x < 8; x++) {
                const producto = listaDeProductos[x];
                let contenedorProducto = document.createElement('div');
                contenedorProducto.setAttribute('class', 'product-container')

                let tituloProducto = document.createElement('h2');
                tituloProducto.textContent = producto.titulo

                let imagenProducto = document.createElement('img');
                imagenProducto.setAttribute('src', producto.img)

                let precioProducto = document.createElement('span');
                precioProducto.textContent = `$${producto.precio}`

                let buttonAgregar = document.createElement('button');
                buttonAgregar.textContent = "Agregar al carrito"
                buttonAgregar.addEventListener('click', () => agregarProductoAlCarrito(producto))

                contenedorProducto.appendChild(tituloProducto);
                contenedorProducto.appendChild(imagenProducto);
                contenedorProducto.appendChild(precioProducto);
                contenedorProducto.appendChild(buttonAgregar);

                listaVideojuegos.appendChild(contenedorProducto)
            }
            break;
        case 7:
            listaProductos.style.display = 'none'
            listaAccPcgaming.style.display = 'none'
            listaConsolas.style.display = 'none'
            listaMaquinitas.style.display = 'none'
            listaRepuestos.style.display = 'none'
            listaVideojuegos.style.display = 'none'
            listaAccConsolas.style.display = 'none'
            listaOtros.style.display = 'flex'
            for (let x = 0; x < 8; x++) {
                const producto = listaDeProductos[x];
                let contenedorProducto = document.createElement('div');
                contenedorProducto.setAttribute('class', 'product-container')

                let tituloProducto = document.createElement('h2');
                tituloProducto.textContent = producto.titulo

                let imagenProducto = document.createElement('img');
                imagenProducto.setAttribute('src', producto.img)

                let precioProducto = document.createElement('span');
                precioProducto.textContent = `$${producto.precio}`

                let buttonAgregar = document.createElement('button');
                buttonAgregar.textContent = "Agregar al carrito"
                buttonAgregar.addEventListener('click', () => agregarProductoAlCarrito(producto))

                contenedorProducto.appendChild(tituloProducto);
                contenedorProducto.appendChild(imagenProducto);
                contenedorProducto.appendChild(precioProducto);
                contenedorProducto.appendChild(buttonAgregar);

                listaOtros.appendChild(contenedorProducto)
            }
            break;
        default: 

        break;
    }
}


/* --------------------- MANEJO DE CATEGORÍAS ------------------- */

async function cambiarCategoria(id) {
    switch(id) {
        case "MLM438578":
            const productosAccesoriosConsolas = await getApiGen("accsconsolas");
            asignarProductosPorCategoria(productosAccesoriosConsolas, 1)
            break;
        case "MLM123324":
            const productosAccesoriosPcGaming = await getApiGen("accspc");
            asignarProductosPorCategoria(productosAccesoriosPcGaming, 2)
            break;
        case "MLM167860":
            const productosConsolas = await getApiGen("consolas");
            asignarProductosPorCategoria(productosConsolas, 3)
            break;
        case "MLM8232":
            const productosMaquinitas = await getApiGen("maquinitas");
            asignarProductosPorCategoria(productosMaquinitas, 4)
            break;
        case "MLM438579":
            const productosRepuestos = await getApiGen("repuestos");
            asignarProductosPorCategoria(productosRepuestos, 5)
            break;
        case "MLM151595":
            const productosVideojuegos = await getApiGen("videojuegos");
            asignarProductosPorCategoria(productosVideojuegos, 6)
            break;
        case "MLM1152":
            const productosOtros = await getApiGen("otros");
            asignarProductosPorCategoria(productosOtros, 7)
            break;
        default:
            console.log("default case")
            break;
    }
}

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
        let categoria = subCategorias[index];
        let divCategoria = document.createElement('li')
        divCategoria.setAttribute('class', "nav-item")

        let linkCategoria = document.createElement('a')
        linkCategoria.setAttribute('class', 'nav-link')
        linkCategoria.addEventListener('click', () => cambiarCategoria(categoria.id))
        linkCategoria.style.fontSize = '18px'
        linkCategoria.style.textAlign = 'left'
        divCategoria.style.listStyleType = 'none'
        divCategoria.style.textAlign = 'left'

        linkCategoria.textContent = `${categoria.name}`

        divCategoria.appendChild(linkCategoria);
        listCategorias.appendChild(divCategoria)
    }
    productos = await getProductosGen();
    console.log(productos)
    await asignarProductos(productos)
}

/* --------------------- LISTA DE CATEGORÍAS ------------------- */


/* --------------------- LISTA DE PRODUCTOS POR CATEGORÍA ------------------- */


async function asignarProductos() {
    listaAccConsolas.style.display = 'none'
    listaAccPcgaming.style.display = 'none'
    listaConsolas.style.display = 'none'
    listaMaquinitas.style.display = 'none'
    listaRepuestos.style.display = 'none'
    listaVideojuegos.style.display = 'none'
    listaOtros.style.display = 'none'
    listaProductos.style.display = 'flex'
    
    let listaDeProductos = await getProductosGen();
    for (let x = 0; x < 8; x++) {
        const producto = listaDeProductos[x];
        let contenedorProducto = document.createElement('div');
        contenedorProducto.setAttribute('class', 'product-container')

        let tituloProducto = document.createElement('h2');
        tituloProducto.textContent = producto.titulo

        let imagenProducto = document.createElement('img');
        imagenProducto.setAttribute('src', producto.img)

        let precioProducto = document.createElement('span');
        precioProducto.textContent = `$${producto.precio}`

        let buttonAgregar = document.createElement('button');
        buttonAgregar.textContent = "Agregar al carrito"
        buttonAgregar.addEventListener('click', () => agregarProductoAlCarrito(producto))

        contenedorProducto.appendChild(tituloProducto);
        contenedorProducto.appendChild(imagenProducto);
        contenedorProducto.appendChild(precioProducto);
        contenedorProducto.appendChild(buttonAgregar);

        listaProductos.appendChild(contenedorProducto)


    }
}

asignarCategorias(url)
asignarProductos()



