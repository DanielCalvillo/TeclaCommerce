

//CLASE CARRITO DE COMPRAS
class Producto{
    constructor(id, producto, precio, img, i){
        this.id = id;
        this.producto = producto;
        this.precio = precio;
        this.img = img;
        this.i = i;
    }
}

//CARRITO
let Carrito = []
let i = 0

const agregarCarrito = (id, producto, precio, img) => {
    Carrito[i] = new Producto(id, producto, precio, img)
    i++;
}

//SE EXPORTA LA FUNCION PARA AGREGAR PRODUCTOS AL CARRITO 
//Y CARRITO PARA MOSTRAR LOS PRODUCTOS QUE AGREGÓ
module.exports = {agregarCarrito, Carrito}