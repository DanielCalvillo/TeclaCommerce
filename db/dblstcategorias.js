const fetch = require('node-fetch');

let subCategorias = 'https://api.mercadolibre.com/categories/'
let idSubCategorias = 'MLM1144'

class Categoria{
    constructor(id, categoria){
        this.id = id;
        this.categoria = categoria;
    }
} 

let ListCategorias = {}

async function getApiCategorias(){
    const url = subCategorias + idSubCategorias;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

async function getListCategorias(){
    let lstCategorias = await getApiCategorias();
    return lstCategorias;
}

const nuevaCategoria = function (id, categoria){
    ListCategorias[categoria] = new Categoria (id, categoria)
}

module.exports = {getListCategorias, nuevaCategoria, ListCategorias}