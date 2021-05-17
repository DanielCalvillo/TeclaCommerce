const express = require('express');

const products = require('../services/products.services')

const router = express.Router();

//*Products

//Get all Products
router.get('/products', products.findAllProducts);
//Create new Product
router.post('/products', products.createNewProduct);
//Update Product
router.post('/products/:id', products.updateProduct);
//Delete Product
router.delete('/products/:id', products.deleteProduct);

module.exports = router
