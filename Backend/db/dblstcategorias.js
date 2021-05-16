//LIBRERÍAS
const fetch = require('node-fetch');

//VARS DE CONSULTA
let subCategorias = 'https://api.mercadolibre.com/categories/'
let idSubCategorias = 'MLM1144'

//CLASE CATEGORÍA
class Categoria{
    constructor(id, categoria, i){
        this.id = id;
        this.categoria = categoria;
        this.i = i;
    }
} 

let ListCategorias = {}

async function getApiCategorias(){
    const url = subCategorias + idSubCategorias;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

/* async function getListCategorias(){
    let lstCategorias = await getApiCategorias();
    return lstCategorias;
} */

const nuevaCategoria = function (id, categoria, i){
    ListCategorias[i] = new Categoria (id, categoria)
}

//FUNCION DE ALGUNA FALLA PARA ACCEDER CATEGORIAS
function fallaCategorias (){
    throw new Error('No es posible acceder en este momento');

}


//EXPORTAMOS LA OBTENCIÓN DE LA INFORMACIÓN DE LAS CATEGORÍAS,
//LA FUNCIÓN PARA CREAR UNA NUEVA CATEGORÍA Y EL OBJETO DONDE SE ALMACENÓ EL ID Y NOMBRE DE CADA CATEGORÍA
//Y LA FUNCION FALLA AL HACER GET
module.exports = {getApiCategorias, nuevaCategoria, ListCategorias, fallaCategorias}