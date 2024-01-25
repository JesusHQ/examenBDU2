let ip=document.getElementById('ip');
let pais=document.getElementById('pais');


// Función para obtener la ubicación y registrar datos enviando la solicitud POST
function registrarDatos() {
  // Hacer una petición para obtener la ubicación
  axios
    .get('https://proyjhq.000webhostapp.com/php-geoip-api/index2.php')
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response.data.pais);
      pais.innerHTML = response.data.pais;
      // Obtener los valores del formulario
      let nombre = document.getElementById('nombre').value;
      let edad = document.getElementById('edad').value;

      // Crear un objeto JSON con los datos del formulario y la ubicación obtenida
      let datos = {
        nombre: nombre,
        edad: edad,
        ubicacion: response.data.pais
      };

      // Enviar la solicitud POST con Axios según la ubicación
      if (datos.ubicacion === 'Argentina') {
        axios.post('https://tu-api-argentina.com/tu-ruta', datos)
          .then(function (response) {
            // Manejar respuesta exitosa
            console.log(response.data);
          })
          .catch(function (error) {
            // Manejar error
            console.log(error);
          });
      } else if (datos.ubicacion === 'Francia') {
        axios.post('https://servjhq.000webhostapp.com/api-francia/index.php', datos)
          .then(function (response) {
            // Manejar respuesta exitosa
            console.log(response.data);
          })
          .catch(function (error) {
            // Manejar error
            console.log(error);
          });
      } else if (datos.ubicacion === 'Angola') {
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
    })
    .catch(function (error) {
      // manejar error al obtener la ubicación
      console.log(error);
    })
    .finally(function () {
      // siempre será ejecutado
    });
}

// Llama a la función registrarDatos cuando se carga la página
window.addEventListener('load', registrarDatos);
