//LIBRERÍAS
const carrito = require('./dbcarrito');

//CLASE TICKES
class Tickets{
    constructor(nombre, apellido, email, direccion, pais, estado, cp, total, carrito){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.email = email;
        this.direccion = direccion;
        this.pais = pais;
        this.estado = estado;
        this.cp = cp;
        this.total = total;
        this.carrito = carrito;
    }
}

//TICKET
let Ticket = {}

const nuevoTicket = function(nombre, apellido, usuario, email, direccion, pais, estado, cp, total){
    Ticket[usuario] = new Tickets(nombre, apellido, usuaro, email, direccion, pais, estado, cp, total, carrito.Carrito)
}

//SE EXPORTA LA FUNCION PARA GENERAR EL TICKET DE LA COMPRA FINALIZADA
module.exports = {nuevoTicket}