const Usuarios = require('../modelo/modelo.usuarios');

const listarUsuarios = async (data) =>{
  try {
    const instanciaUsuarios = new Usuarios(data)
    const resultado = await instanciaUsuarios.listar();
    return resultado;
  } catch (err) {
    console.log('Error desde el modelo ' + err)
    throw new Error ({ error: err.message})
  }
} 


module.exports = {
  listarUsuarios
}