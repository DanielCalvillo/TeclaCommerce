// const fetch = require("node-fetch");

async function login() {
  const user = document.getElementById("login").value
  const password = document.getElementById("password").value
  console.log(user , password);
  try { 
    const response = await fetch('http://localhost:4000/api/v1/logincustomer', {
      method: 'POST',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify({
        name: user,
        password: password
      })
    });
    if (response.status === 200) {
      alert("Logeado con exito")
      window.location.replace("http://127.0.0.1:5500/");
    } else if (response.status === 400 ){
      alert("Correo o contraseña incorrectos")
      window.location.replace("http://localhost:4000/api/v1/datos/login");
    }
  } catch(err) {
    throw new Error("Nombre o contraseña incorrectos")
  }
}