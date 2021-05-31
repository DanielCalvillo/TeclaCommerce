const Categories = require('../models/categories');
const fetch = require("node-fetch");
const categories = require('../services/categories.services');

async function fillCategorias() {
  const url = 'https://api.mercadolibre.com/categories/MLM1144'
  const response = await fetch(url);
  const data = await response.json()
  const categories = data.children_categories
  for (let x = 0; x < categories.length; x++) {
    const newCategorie = await Categories.create({title: categories[x].name, id_market: categories[x].id})
    console.log(newCategorie)
  }
}


fillCategorias()