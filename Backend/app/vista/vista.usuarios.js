const controladorUsuarios = require('../controlador/controlador.usuarios');

const listarDatosUsuarios = async (req, res) => {
  let data = req.params.metodo

  try {
    let resultado = await controladorUsuarios.listarUsuarios(data);
    res.render('index', { result: resultado })
  } catch (err) {
    console.log(err)
    res.status(400).json('Error en la consulta')
  }
}

module.exports = {
  listarDatosUsuarios
}