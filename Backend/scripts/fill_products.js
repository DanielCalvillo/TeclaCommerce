const fetch = require("node-fetch");
const Products = require('../models/products');


async function fillProductos() {
  const url = 'https://api.mercadolibre.com/sites/MLM/search?category=MLM1144'
  const response = await fetch(url);
  const data = await response.json()
  const productos = data.results
  // const categories = data.children_categories
  for (let x = 0; x < productos.length; x++) {
    const newProduct = await Products.create({
      title: productos[x].title,
      price: parseInt(productos[x].price),
      img: productos[x].thumbnail,
      categorie_id: "MLM1144"
  })
    console.log(newProduct)
  }
}
async function fillProductos1() {
  const url = 'https://api.mercadolibre.com/sites/MLM/search?category=MLM438578'
  const response = await fetch(url);
  const data = await response.json()
  const productos = data.results
  // const categories = data.children_categories
  for (let x = 0; x < productos.length; x++) {
    const newProduct = await Products.create({
      title: productos[x].title,
      price: parseInt(productos[x].price),
      img: productos[x].thumbnail,
      categorie_id: "MLM438578"
  })
    console.log(newProduct)
  }
}
async function fillProductos2() {
  const url = 'https://api.mercadolibre.com/sites/MLM/search?category=MLM123324'
  const response = await fetch(url);
  const data = await response.json()
  const productos = data.results
  // const categories = data.children_categories
  for (let x = 0; x < productos.length; x++) {
    const newProduct = await Products.create({
      title: productos[x].title,
      price: parseInt(productos[x].price),
      img: productos[x].thumbnail,
      categorie_id: "MLM123324"
  })
    console.log(newProduct)
  }
}
async function fillProductos3() {
  const url = 'https://api.mercadolibre.com/sites/MLM/search?category=MLM167860'
  const response = await fetch(url);
  const data = await response.json()
  const productos = data.results
  // const categories = data.children_categories
  for (let x = 0; x < productos.length; x++) {
    const newProduct = await Products.create({
      title: productos[x].title,
      price: parseInt(productos[x].price),
      img: productos[x].thumbnail,
      categorie_id: "MLM167860"
  })
    console.log(newProduct)
  }
}
async function fillProductos4() {
  const url = 'https://api.mercadolibre.com/sites/MLM/search?category=MLM8232'
  const response = await fetch(url);
  const data = await response.json()
  const productos = data.results
  // const categories = data.children_categories
  for (let x = 0; x < productos.length; x++) {
    const newProduct = await Products.create({
      title: productos[x].title,
      price: parseInt(productos[x].price),
      img: productos[x].thumbnail,
      categorie_id: "MLM8232"
  })
    console.log(newProduct)
  }
}
async function fillProductos5() {
  const url = 'https://api.mercadolibre.com/sites/MLM/search?category=MLM438579'
  const response = await fetch(url);
  const data = await response.json()
  const productos = data.results
  // const categories = data.children_categories
  for (let x = 0; x < productos.length; x++) {
    const newProduct = await Products.create({
      title: productos[x].title,
      price: parseInt(productos[x].price),
      img: productos[x].thumbnail,
      categorie_id: "MLM438579"
  })
    console.log(newProduct)
  }
}
async function fillProductos6() {
  const url = 'https://api.mercadolibre.com/sites/MLM/search?category=MLM151595'
  const response = await fetch(url);
  const data = await response.json()
  const productos = data.results
  // const categories = data.children_categories
  for (let x = 0; x < productos.length; x++) {
    const newProduct = await Products.create({
      title: productos[x].title,
      price: parseInt(productos[x].price),
      img: productos[x].thumbnail,
      categorie_id: "MLM151595"
  })
    console.log(newProduct)
  }
}

async function fillProductos7() {
  const url = 'https://api.mercadolibre.com/sites/MLM/search?category=MLM1152'
  const response = await fetch(url);
  const data = await response.json()
  const productos = data.results
  // const categories = data.children_categories
  for (let x = 0; x < productos.length; x++) {
    const newProduct = await Products.create({
      title: productos[x].title,
      price: parseInt(productos[x].price),
      img: productos[x].thumbnail,
      categorie_id: "MLM1152"
  })
    console.log(newProduct)
  }
}

fillProductos()
fillProductos1()
fillProductos2()
fillProductos3()
fillProductos4()
fillProductos5()
fillProductos6()
fillProductos7()
