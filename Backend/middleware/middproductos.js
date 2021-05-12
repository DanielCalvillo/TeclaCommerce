//LIBRERÍAS
const productos = require('../db/dbproductos');

//CONTROL DE ERRORES CUANDO SE HACE EL GET A LOS PRODUCTOS DE CADA CATEGORIA

//PRODUCTOS GENERALES
async function getProductosGen(){
    try {
        let producGen = await productos.getApiGen();
        return producGen;
    } catch (error) {
        console.log('Se ha producido un error en la API para Productos Generales');
        try {
            productos.fallaProductos();
        } catch (error) {
            throw new Error(error.message)
        }
    }
    
}

//ACCESORIOS PARA CONSOLAS
async function getProductosAccsConsolas(){
    try {
        let producAccsConsolas = await productos.getApiAccsConsolas();
        return producAccsConsolas;
    } catch (error) {
        console.log('Se ha producido un error en la API para Accesorios para Consolas');
        try {
            productos.fallaProductos();
        } catch (error) {
            throw new Error(error.message)
        }
    }
} 


//ACCESORIOS PARA PC
async function getProductosAccsPc(){
    try {
        let producAccesoriosPc = await productos.getApiAccsPc();
        return producAccesoriosPc;
    } catch (error) {
        console.log('Se ha producido un error en la API para Accesorios para PC');
        try {
            productos.fallaProductos();
        } catch (error) {
            throw new Error(error.message);
        }
    }

}


//CONSOLAS
async function getProductosConsolas(){
    try {
        let producConsolas = await productos.getApiConsolas();
        return producConsolas;
    } catch (error) {
        console.log('Se ha producido un error en la API para Consolas');
        try {
            productos.fallaProductos();
        } catch (error) {
            throw new Error(error.message);
        }
    }

}


//MAQUINITAS
async function getProductosMaquinitas(){
    try {
        let producMaquinitas = await productos.getApiMaquinitas();
        return producMaquinitas;
    } catch (error) {
        console.log('Se ha producido un error en la API para Maquinitas');
        try {
            productos.fallaProductos();
        } catch (error) {
            throw new Error(error.message)
        }
    }
} 

//REPUESTOS 
async function getProductosRepuestos(){
    try {
        let producRepuestos = await productos.getApiRepuestos();
        return producRepuestos;
    } catch (error) {
        console.log('Se ha producido un error en la API para Repuestos');
        try {
            productos.fallaProductos();
        } catch (error) {
            throw new Error(error.message)
        }
    }

}
//VIDEOJUEGOS
async function getProductosVideojuegos(){
    try {
        let producVideojuegos = await productos.getApiVideojuegos();
        return producVideojuegos;
    } catch (error) {
        console.log('Se ha producido un error en la API para Videojuegos');
        try {
            productos.fallaProductos();
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

//OTROS
async function getProductosOtros(){
    try {
        let producOtros = await productos.getApiOtros();
        return producOtros;
    } catch (error) {
        console.log('Se ha producido un error en la API para Otros');
        try {
            productos.fallaProductos();
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

//EXPORTAMOS LAS FUNCIONES PARA CONTROL DE ERRORES EN EL GET DE CADA CATEGORIA
module.exports = {getProductosGen, 
                getProductosAccsConsolas, 
                getProductosAccsPc,
                getProductosConsolas,
                getProductosMaquinitas,
                getProductosRepuestos,
                getProductosVideojuegos,
                getProductosOtros}