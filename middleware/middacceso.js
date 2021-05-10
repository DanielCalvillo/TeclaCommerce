//LIBRERIAS
const limit = require('express-rate-limit');


//CONTROLADORES DE ACCESO

//LIMITAR LAS CONSULTAS POR MINUTOS
const limiter = limit({
    windowMs: 10 * 60 * 1000,    //CADA 10 MINUTOS
    max: 10,                     //MÁXIMO 10 CONSULTAS SEGUIDAS
    message: 'Se han excedido el límite de intentos para acceder a la API. Intente más tarde'
});

//DETERMINAR LOS PUERTOS QUE TENDRÁN ACCESO
const accesoPuertos = {
    origin : function (origin, callback){
        if(process.env.listaBlanca.indexOf(origin)){
            callback(null, true)
        }else{
            callback(new Error('Lo sentimos, pero no tienes permitido el acceso'))
        }
    }
}

//CONTROLAR EL USO DE LA APIKEY


//EXPORTAR LIMITADOR DE CONSULTAS, PUERTOS CON ACCESO Y USO DE APIKEY
module.exports = {limiter, accesoPuertos}