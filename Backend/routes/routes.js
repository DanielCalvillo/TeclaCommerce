const express = require('express');

const products = require('../services/products.services')
const users = require('../services/users.services')
const midd = require('../middleware/midd.usuario')
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
router.get('/users', midd.verificacionUsuario, users.findAllUser);
//Create new user
router.post('/users', midd.verificacionUsuario, users.createNewUser);
//Update user
router.delete('/users/:id', midd.verificacionUsuario, users.updateUser);
//Delete user
router.post('/users/:id', midd.verificacionUsuario, users.deleteUser);

router.post('/login', async (req,res) => {
  let usuario = req.body
        try {
            let resultado = await users.findOneUser(usuario)
            if (resultado){
                let tokenResult = await users.generaToken(usuario)
                res.json(tokenResult)
            }else {
                throw new Error (err)
            }
        }catch (err){
            console.log(err)
            res.status(400).json('Usuario o contrasena incorrecta')
        }
})


// Rutas desde el MVC

router.get('/datos/:metodo', vistaUsuarios.listarDatosUsuarios)

module.exports = router
