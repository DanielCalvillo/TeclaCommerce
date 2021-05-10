

//CLASE CARRITO DE COMPRAS
class CarritoCompra{
    constructor(id, producto, precio, img){
        this.id = id;
        this.producto = producto;
        this.precio = precio;
        this.img = img;
    }
}

//CARRITO
let Carrito = {}

const agregarCarrito = function(id, producto, precio, img){
    Carrito[id] = new CarritoCompra(id, producto, precio, img)
}

//SE EXPORTA LA FUNCION PARA AGREGAR PRODUCTOS AL CARRITO 
//Y CARRITO PARA MOSTRAR LOS PRODUCTOS QUE AGREGÓ
module.exports = {agregarCarrito, Carrito}