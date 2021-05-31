const jwt = require('jsonwebtoken')

module.exports.verificacionUsuario = async (req,res,next)=>{
    let token = req.headers.authorization
    console.log(`Token ${token}`)
    if (token){
        let tokenchk = token.split(' ')[1]
        let resultado = jwt.verify(tokenchk, process.env.SECRET_KEY)
        //console.log(resultado)
        if (resultado){
            next()
        }else {
            throw new Error ('Token no valido')
        }
    }else {
        res.status(400).json('Necesitas un JWT para ingresar')
    }
}