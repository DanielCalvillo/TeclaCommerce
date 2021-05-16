
const elCarrito = document.getElementById("carrito-compras")

const totalCarrito = document.getElementById("total-carrito")

const productosTotales = document.getElementById("productos-totales")

const botonAceptar = document.getElementById("aceptar-datos-usuario");

async function getCarrito() {

    const response = await fetch('http://localhost:4000/productos/carrito')

    const parsedResponse = await response.json()
    return parsedResponse
}

async function fillCarrito() {
    let datosCarrito = await getCarrito();
    let precioTotal = 0;
    for (let x = 0; x < datosCarrito.length; x++) {
        const producto = datosCarrito[x];
        let contenedorProducto = document.createElement('div');
        contenedorProducto.setAttribute('class', 'product-container')

        let tituloProducto = document.createElement('h2');
        tituloProducto.textContent = producto.producto

        let imagenProducto = document.createElement('img');
        imagenProducto.setAttribute('src', producto.img)

        let precioProducto = document.createElement('span');
        precioProducto.textContent = `$${producto.precio}`

        contenedorProducto.appendChild(tituloProducto);
        contenedorProducto.appendChild(imagenProducto);
        contenedorProducto.appendChild(precioProducto);

        precioTotal += producto.precio

        elCarrito.appendChild(contenedorProducto)
    }
    
    let textoTotal = document.createElement('span')
    textoTotal.textContent = "Total (MXN)"

    let elPrecio = document.createElement('strong')
    elPrecio.textContent = `$${precioTotal}`

    totalCarrito.appendChild(textoTotal);
    totalCarrito.appendChild(elPrecio);

    productosTotales.textContent = datosCarrito.length

}

function AceptarDatosUsuario() {
    alert("Su Carrito Fue Comprado Exitosamente")
}
botonAceptar.addEventListener("click", AceptarDatosUsuario)

fillCarrito()