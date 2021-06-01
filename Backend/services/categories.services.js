const sequelize = require('../db/conexion');
const Categories = require('../models/categories');
const { Op } = require('sequelize');


const findAllCategories = async (req, res) => {
    try {
        const myCategories = await sequelize.query('SELECT * FROM "Categories"')
        console.log(myCategories)
        res.status(200).json(myCategories);
    } catch(err) {
        console.log(`Error obteniendo Categorias: ${err}`)
        res.status(400).json({message: "Error obteniendo Categorias", error: err})
    }
}

const createNewCategorie = async (req, res) => {
    const categorie = req.body 
    try {
        const newCategorie = await Categories.create(categorie)
        res.status(200).json({ message: "Categorie Created succesfully", categorie: newCategorie})
    } catch (err) {
        res.status(400).json({ message: "Error creating Categorie", error: err })
    }
}

const deleteCategorie = async (req, res) => {
    try {
        await Categories.destroy({
            where: {
                categorie_id: req.params.id
            }
        })
        res.status(200).json({ message: "Categorie deleted succesfully" })
    } catch(err) {
        res.status(400).json({ message: "Could'nt delete Categorie", error: err})
    }
}

const updateCategorie = async (req, res) => {
    const categorie = req.body
    try {
        const updatedCategorie = await Categories.update(categorie, {
            where: {
                categorie_id: req.params.id
            }
        })
        res.status(200).json({ message: "Categorie updated succesfully", categorie: updatedCategorie});
    } catch (err) {
        res.status(400).json({ message: "Error updating Categorie", error: err})
    }
}

module.exports = {
  findAllCategories,
  createNewCategorie,
  deleteCategorie,
  updateCategorie
}
