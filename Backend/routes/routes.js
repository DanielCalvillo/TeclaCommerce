const express = require('express');

const products = require('../services/products.services');
const users = require('../services/users.services');
const customers = require('../services/customers.services');
const categories = require('../services/categories.services');
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
//Get Products by categorie 
router.get('/products/:id', midd.verificacionUsuario, products.findProductsByCategory);

//Get all users
router.get('/users', users.findAllUser);
//Get OneUser
router.get('/users/:id', midd.verificacionUsuario, users.findOneUser);
//Create new user
router.post('/users', users.createNewUser);
//Update user
router.patch('/users/:id', midd.verificacionUsuario, users.updateUser);
//Delete user
router.delete('/users/:id', midd.verificacionUsuario, users.deleteUser);

router.post('/login', users.loginUser);


//Get all customers
router.get('/customers', customers.findAllCustomers);
//Get OneCustomer
router.get('/customers/:id', midd.verificacionUsuario, customers.findOneCustomer);
//Create new custom
router.post('/customers', customers.createNewCustomer);
//Update custom
router.patch('/customers/:id', midd.verificacionUsuario, customers.updateCustomer);
//Delete custom
router.delete('/customers/:id', midd.verificacionUsuario, customers.deleteCustomer);
//Update car
router.post('/customers/car/:id', midd.verificacionUsuario, customers.addProductToCar);

//Get all Categories
router.get('/categories', categories.findAllCategories);
//Get OneCustomer
// router.get('/customers/:id', midd.verificacionUsuario, customers.findOneCustomer);
//Create new custom
router.post('/categories', midd.verificacionUsuario, categories.createNewCategorie);
//Update categorie
router.patch('/categories/:id', midd.verificacionUsuario, categories.updateCategorie);
//Delete categorie
router.delete('/categories/:id', midd.verificacionUsuario, categories.deleteCategorie);

router.post('/logincustomer', customers.loginCustomer);


// Rutas desde el MVC

router.get('/datos/:metodo', vistaUsuarios.listarDatosUsuarios)

module.exports = router
