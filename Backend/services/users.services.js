const sequelize = require('../db/conexion');
const Users = require('../models/products');


const generaToken = async (data)=>{
  try {
      let resultado = jwt.sign({
          data}, process.env.SECRET_KEY
      )
      return resultado
  }catch (err){
      console.log(err)
      throw new Error (err)
  }
}

const findAllUser = async (req, res) => {
    try {
        const myProducts = Users.findAll();
        res.status(200).json(myProducts);
    } catch(err) {
        console.log(`Error obteniendo Usuarios: ${err}`)
        res.status(400).json({message: "Error obteniendo Usuarios", error: err})
    }
}

const findOneUser = async (usr)=>{
  let resultado = await Users.findOne({where: { name: usr.usuario, pass: usr.pass}})
  // null
  if (resultado === null){
      return false
  }else {
      return true
  }
}


const createNewUser = async (req, res) => {
    try {
        const newProduct = await Users.create({
            name: req.body.title,
            first_name: req.body.price,
            last_name: req.body.img,
            email: req.body.email
        })
        res.status(200).json({ message: "user Created succesfully", product: newProduct})
    } catch (err) {
        res.status(400).json({ message: "Error creating user", error: err })
    }
}

const deleteUser = async (req, res) => {
    try {
        await Users.destroy({
            where: {
                service_id: req.params.id
            }
        })
        res.status(200).json({ message: "user deleted succesfully" })
    } catch(err) {
        res.status(400).json({ message: "Could'nt delete user", error: err})
    }
}

const updateUser = async (req, res) => {
    try {
        const updatedProduct = await Users.update({ title: req.body.title }, {
            where: {
                service_id: req.params.id
            }
        })
        res.status(200).json({ message: "user updated succesfully", product: updatedProduct});
    } catch (err) {
        res.status(400).json({ message: "Error updating user", error: err})
    }
}

module.exports = {
  findAllUser,
  createNewUser,
  deleteUser,
  updateUser,
  generaToken,
  findOneUser
}
