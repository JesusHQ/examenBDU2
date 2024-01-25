// Función para registrar datos y enviar la solicitud POST
function registrarDatos(ubicacion) {
  // Obtener los valores del formulario
  let nombre = document.getElementById('nombre').value;
  let edad = document.getElementById('edad').value;

  // Crear un objeto JSON con los datos del formulario
  let datos = {
    nombre: nombre,
    edad: edad,
    ubicacion: ubicacion
  };

  // Enviar la solicitud POST con Axios según la ubicación
  if (ubicacion === 'Argentina') {
    axios.post('https://tu-api-argentina.com/tu-ruta', datos)
      .then(function (response) {
        // Manejar respuesta exitosa
        console.log(response.data);
      })
      .catch(function (error) {
        // Manejar error
        console.log(error);
      });
  } else if (ubicacion === 'Francia') {
    axios.post('https://servjhq.000webhostapp.com/api-francia/index.php', datos)
      .then(function (response) {
        // Manejar respuesta exitosa
        console.log(response.data);
      })
      .catch(function (error) {
        // Manejar error
        console.log(error);
      });
  } else if (ubicacion === 'Angola') {
    axios.post('https://tu-api-angola.com/tu-ruta', datos)
      .then(function (response) {
        // Manejar respuesta exitosa
        console.log(response.data);
      })
      .catch(function (error) {
        // Manejar error
        console.log(error);
      });
  } else {
    // Manejar otras ubicaciones si es necesario
    console.log('Ubicación no reconocida');
  }
}
