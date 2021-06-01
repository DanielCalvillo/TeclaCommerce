const Users = require('../../models/users');
//const Data = require('')

//Exportamos nuestro modelo

module.exports = class Usuarios {
    constructor (datos){
        this.datos = datos
    }

    async login () {
        console.log('metodo ' + this.datos)
        try {
          const resultado = await Users.findAll();
          // const parsedResult = resultado.json()
          return resultado;
        } catch (err) {
          throw new Error(err.message)
        } 
    }
}