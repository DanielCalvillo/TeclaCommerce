const sequelize = require('../db/conexion');
const Products = require('../models/products');

const findAllProducts = async (req, res) => {
    try {
        const myProducts = sequelize.query('SELECT * FROM "Products"');
        res.status(200).json(myProducts);
    } catch(err) {
        console.log(`Error obteniendo productos: ${err}`)
        res.status(400).json({message: "Error obteniendo productos", error: err})
    }
}

const createNewProduct = async (req, res) => {
    try {
        const newProduct = await Products.create({
            title: req.body.title,
            price: req.body.price,
            img: req.body.img,
            categorie_id: req.body.categorie_id
        })
        res.status(200).json({ message: "Product Created succesfully", product: newProduct})
    } catch (err) {
        res.status(400).json({ message: "Error creating product", error: err })
    }
}

const deleteProduct = async (req, res) => {
    try {
        await Products.destroy({
            where: {
                product_id: req.params.id
            }
        })
        res.status(200).json({ message: "Product deleted succesfully" })
    } catch(err) {
        res.status(400).json({ message: "Could'nt delete product", error: err})
    }
}

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Products.update({ title: req.body.title }, {
            where: {
                product_id: req.params.id
            }
        })
        res.status(200).json({ message: "Product updated succesfully", product: updatedProduct});
    } catch (err) {
        res.status(400).json({ message: "Error updating product", error: err})
    }
}

const findProductsByCategory = async (req, res) => {
    try {
        const products = await Products.findAll({where: {categorie_id: req.params.id}})
        res.status(200).json({ message: "Productos obtenidos exitosamente", productos: products})
    } catch (err) {
        console.log("Error obteniendo producto por categoria")
        res.status(400).json({ message: "Error obteniendo los productos", error: err})
    }
}

module.exports = {
    findAllProducts,
    createNewProduct,
    deleteProduct,
    updateProduct,
    findProductsByCategory
}
