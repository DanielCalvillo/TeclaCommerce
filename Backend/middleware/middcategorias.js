//LIBRERÍAS
const categorias = require('../db/dblstcategorias');

//CONTROLADOR DE ERRORES AL HACER GET A LA LISTA CATEGORIAS

async function tomarCategorias  (){
    try {
        let categories = await categorias.getApiCategorias();
        return categories
    } catch (error) {
        console.log('Se ha producido un error en la API para Categorias');
        try {
            categorias.fallaCategorias();
        } catch (error) {
            throw new Error(error.message)
        }
    }
    
}

//SE EXPORTA LA RESPUESTA A LA API
module.exports = {tomarCategorias}
