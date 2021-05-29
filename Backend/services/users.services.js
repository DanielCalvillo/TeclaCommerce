const sequelize = require('../db/conexion');
const Users = require('../models/users');
const jwt = require('jsonwebtoken')

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
        const myUsers = await sequelize.query('SELECT * FROM "Users"')
        res.status(200).json(myUsers);
    } catch(err) {
        console.log(`Error obteniendo Usuarios: ${err}`)
        res.status(400).json({message: "Error obteniendo Usuarios", error: err})
    }
}

const userExistOnDatabase = async (usr) => {
  let resultado = await Users.findOne({where: { name: usr.usuario, password: usr.password}})
  // null
  if (resultado === null){
      return false
  }else {
      return true
  }
}

const findOneUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await Users.findOne({where: { user_id: id }})
        res.status(200).json( { message: "User Found Succesfully", User: user})
    } catch (err) {
        res.status(400).json({ message: "User doesn't exist on database", error: err})
    }
}


const createNewUser = async (req, res) => {
    const usuarioNuevo = req.body
    try {
        const newUser = await Users.create({
            name: usuarioNuevo.name,
            first_name: usuarioNuevo.first_name,
            last_name: usuarioNuevo.last_name,
            password: usuarioNuevo.password,
            email: usuarioNuevo.email
        })
        res.status(200).json({ message: "User Created succesfully", User: newUser})
    } catch (err) {
        res.status(400).json({ message: "Error creating User", error: err })
    }
}

const loginUser = async (req, res) => {
    let user = req.body
    try {
        let userExist = await userExistOnDatabase(user);
        if (userExist) {
            let tokenGenerated = await generaToken(user)
            res.status(200).json({ message: "token generado correctamente", token: tokenGenerated})
        } else {
            throw new Error (err)
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: "Error en el login", error: err})
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
  findOneUser,
  loginUser
}
