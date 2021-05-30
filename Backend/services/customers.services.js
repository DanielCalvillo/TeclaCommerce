const sequelize = require('../db/conexion');
const Customers = require('../models/customers');
const jwt = require('jsonwebtoken');

const generaToken = async (data)=>{
    try{
        let resultado = jwt.sign(
            {data}, process.env.SECRET_KEY
        )
        return resultado
    }catch(error){
        console.log(error)
        throw new Error (error)
    }
}

const loginCustom = async (req, res)=>{
    let custom = req.body
    try{
        let customExist = await customExistOnDataBase(custom);
        if(customExist){
            let tokenGenerated = await generaToken(custom);
            res.status(200).json({message: "token generado correctamente", token: tokenGenerated})
        }else{
            throw new Error (error)
        }
    }catch(error){
        console.log(error)
        res.status(400).json({ message: "Error en el login", error: err})
    }
}

const customExistOnDataBase = async (custom)=>{
    let resultado = await Customers.findOne({where: {user: custom.user, password: custom.password}})
    if(resultado === null){
        return false
    }else{
        return true
    }
}

const createNewCustom = async (req, res)=>{
    const customNew = req.body
    try{
        const newCustom = await Customers.create({
            first_name: customNew.first_name,
            last_name: customNew.last_name,
            user: customNew.user,
            password: customNew.password,
            email: customNew.email,
            address: customNew.address,
            country: customNew.country,
            state: customNew.state,
            zip: customNew.zip
        })
        res.status(200).json({ message: "Custom Created succesfully", Custom: newCustom})
    }catch(error){
        res.status(400).json({ message: "Error creating User", error: error })
    }
}

const updateCustom = async (req, res)=>{
    const customUp = req.body;
    try{
        const customUpdated = await Customers.update({
            password: customUp.password,
            email: customUp.email,
            address: customUp.address,
            country: customUp.country,
            state: customUp.state,
            zip: customUp.zip
        },
        {
            where:{custom_id: req.params.id}
        })
        res.status(200).json({ message: "Custom updated succesfully", product: customUpdated })
    }catch(error){
        res.status(400).json({ message: "Error updating Custom", error: error})
    }
}

const deleteCustom = async (req, res)=>{
    try{
        await Customers.destroy({
            where: {custom_id: req.params.id}
        })
        res.status(200).json({ message: "Custom deleted succesfully" })
    }catch(error){
        res.status(400).json({ message: "Could'nt delete Custom", error: error})
    }
}

const findAllCustomers = async (req, res) => {
    try {
        const myCustomers = await sequelize.query('SELECT * FROM "Customers"')
        res.status(200).json(myCustomers);
    } catch(err) {
        console.log(`Error obteniendo Clientes: ${err}`)
        res.status(400).json({message: "Error obteniendo Clientes", error: err})
    }
}

const findOneCustom = async (req, res) => {
    const id = req.params.id
    try {
        const custom = await Customers.findOne({where: { custom_id: id }})
        res.status(200).json( { message: "Cuatom Found Succesfully", Custom: custom})
    } catch (err) {
        res.status(400).json({ message: "Cuatom doesn't exist on database", error: err})
    }
}

module.exports = {
    createNewCustom,
    loginCustom,
    updateCustom,
    deleteCustom,
    findAllCustomers,
    findOneCustom
}