const express = require('express');

const products = require('../services/products.services');
const users = require('../services/users.services');
const customers = require('../services/customers.services');
const midd = require('../middleware/midd.usuario');
const middcustom = require('../middleware/midd.cliente')
const router = express.Router();

//Exportar mi vista del mvc

const vistaUsuarios = require('../app/vista/vista.usuarios');

//Get all Products
router.get('/products', midd.verificacionUsuario, products.findAllProducts);
//Create new Product
router.post('/products', midd.verificacionUsuario, products.createNewProduct);
//Update Product
router.post('/products/:id', midd.verificacionUsuario, products.updateProduct);
//Delete Product
router.delete('/products/:id', midd.verificacionUsuario, products.deleteProduct);

//Get all users
router.get('/users', users.findAllUser);
//Get OneUser
router.get('/users/:id', midd.verificacionUsuario, users.findOneUser);
//Create new user
router.post('/users', users.createNewUser);
//Update user
router.post('/users/:id', midd.verificacionUsuario, users.updateUser);
//Delete user
router.delete('/users/:id', midd.verificacionUsuario, users.deleteUser);

router.post('/login', users.loginUser);


//Get all customers
router.get('/customers', customers.findAllCustomers);
//Get OneCustom
router.get('/custom/:id', midd.verificacionUsuario, customers.findOneCustom);
//Create new custom
router.post('/custom', customers.createNewCustom);
//Update custom
router.post('/custom/:id', middcustom.verificacionCliente, customers.updateCustom);
//Delete custom
router.delete('/custom/:id', middcustom.verificacionCliente, customers.deleteCustom);

router.post('/logincustom', customers.loginCustom);


// Rutas desde el MVC

router.get('/datos/:metodo', vistaUsuarios.listarDatosUsuarios)

module.exports = router
