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

const loginCustomer = async (req, res)=>{
    let customer = req.body
    console.log(customer)
        try{
        let customerExist = await customExistOnDataBase(customer);
        if(customerExist){
            let tokenGenerated = await generaToken(customer);

            return res.status(200).json({message: "token generado correctamente", token: tokenGenerated})
        }else{
            throw new Error (error)
        }
    }catch(err){
        console.log("error en el login de customer" + err)
        res.status(400).json({ message: "Correo o contraseña incorrectos", error: err.message})
    }
}

const customExistOnDataBase = async (customer)=>{
    console.log(customer)
    let resultado = await Customers.findOne({where: {name: customer.name, password: customer.password}})
    if(resultado === null){
        return false
    }else{
        return true
    }
}

const createNewCustomer = async (req, res)=>{
    const customerNew = req.body
    try{
        const newCustomer= await Customers.create({
            name: customerNew.name,
            first_name: customerNew.first_name,
            last_name: customerNew.last_name,
            password: customerNew.password,
            email: customerNew.email,
            address: customerNew.address,
            country: customerNew.country,
            state: customerNew.state,
            postal_code: customerNew.postal_code
        })
        res.status(200).json({ message: "Customer Created succesfully", Custom: newCustomer})
    }catch(error){
        res.status(400).json({ message: "Error creating Customer", error: error })
    }
}

const updateCustomer = async (req, res)=>{
    const customer = req.body;
    try{
        const customerUpdated = await Customers.update(customer,
        {
            where:{customer_id: req.params.id}
        })
        res.status(200).json({ message: "Customer updated succesfully", product: customerUpdated })
    }catch(error){
        res.status(400).json({ message: "Error updating Customer", error: error})
    }
}

const deleteCustomer = async (req, res)=>{
    try{
        await Customers.destroy({
            where: {customer_id: req.params.id}
        })
        res.status(200).json({ message: "Customer deleted succesfully" })
    }catch(error){
        res.status(400).json({ message: "Could'nt delete Customer", error: error})
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

const findOneCustomer = async (req, res) => {
    const id = req.params.id
    try {
        const customer = await Customers.findOne({where: { customer_id: id }})
        res.status(200).json( { message: "Customer Found Succesfully", Customer: customer})
    } catch (err) {
        res.status(400).json({ message: "Customer doesn't exist on database", error: err})
    }
}

const addProductToCar = async (req, res) => {
    const producto = req.body
    const idCostumer = req.params.id
    console.log(idCostumer);
    try {
        const costumer = await Customers.findOne({where: { customer_id: idCostumer}})
        if (costumer.products === null) {
            costumer.products = {}
        }
        let carrito = costumer.products
        carrito = {...carrito, productoAgregado: producto}
        costumer.update({
            products: carrito
        })
        res.status(200).json({message: "car updated", costumer: costumer.products})
    } catch (err){
        res.status(400).json({message: "Error adding to car", error: err.message})
    }
}

module.exports = {
    createNewCustomer,
    loginCustomer,
    updateCustomer,
    deleteCustomer,
    findAllCustomers,
    findOneCustomer,
    addProductToCar
}