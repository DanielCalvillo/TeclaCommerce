# TeclaCommerce

¿COMO USAR NUESTRA APLICACIÓN? ...

 1.- INICIAR LA APLICACIÓN POSICIONÁNDOSE EN LA CARPETA "Backend" Y EJECUTAR LOS COMANDOS: npm install
(Para este punto, se deberá tener instalado NodeJs).

 2.- INICIAR EL SERVIDOR CON EL COMANDO: npm run dev.

 3.- CARGAR EL SERVIDOR EN EL BUSCADOR O POSTMAN PARA GENERAR EL PRIMER GET, QUE NOS CREARA EL CONSUMO A LA API DE "MERCADO LIBRE".

 4.- CARGAR EL ARCHIVO "index.html" CON "LIVE SERVER".

 5.- DENTRO DE LA APLICACIÓN SE PODRÁ:

 --OBSERVAR LA LISTA DE PRODUCTOS.

 --LAS DIVERSAS CATEGORÍAS, LAS CUALES PAL DAR 'click' SE DEPLEGARÁN LOS PRODUCTOS CORRESPONDIENTES A LA MISMA.

 --SE PUEDEN AGREGAR PRODUCTOS AL CARRITO.

 --EN "MiCarrito" SE PODRÁ VISUALIZAR LA PANTALLA DE PAGO Y LA LISTA DE LOS ARTÍCULOS SELECCIONADOS.

 6.- EN NUESTRA COLLECIÓN DE POSTMAN SERÁ PERMITIDO HACER.

 --GET A: PRODUCTOS GENERALES, POR CATEGORÍA Y LA LISTA DE CATEGORÍAS, ASÍ COMO NUESTRO GET INICIAL.

 --POST A: NUESTROS PRODUCTOS.

7.- DENTRO DE NUESTRAS CARPETAS:
--BACKEND
>>EN EL SERVIDOR TENEMOS LOS ENDPOINTS DE NUESTRA API, DONDE SE HACE UN GET A CATEGORIAS, PRODUCTOS, PRODUCTOS DE CADA SUBCATEGORIA Y EL POST A NUESTRO CARRITO.
>>CADA UNO DE LOS ENDPOINTS EN EL SERVIDOR TIENE UN CONTROL DE ERRORES, QUE PASA POR SU RESPECTIVO MIDDLEWARE ENCARGADO DE HACER LA PETICIÓN A NUESTRA BASE DE DATOS, Y QUE POR MEDIO DE "res" LE MANDA LA RESPUESTA.
>>EN CASO DE MANDAR UN ERROR ES TOMADO Y PLASMADO EN CONSOLA Y COMO "res".

--FRONTEND
>>MUESTRA NUESTRAS PANTALLAS DE: LOGIN, CHECKOUT E INDEX CON NUESTROS ESTILOS E IMÁGENES.
>>EL ARCHIVO "index.js" SE ENCUENTRA LA FUNCIONALIDAD DE LA PÁGINA COMO LA LISTA DE PRODUCTOS, LAS DIVERSAS CATEGORÍAS, LA NAVEGACIÓN, EL BOTÓN DE AGREGAR AL CARRITO CON LA LISTA DE ITEMS SELECCIONADOS Y LA COMPRA REALIZADA.

8.- DOCUMENTACIÓN CON SWAGGER: https://app.swaggerhub.com/apis/SandyJos/API-TeclaCommerce/1.0.0

 
