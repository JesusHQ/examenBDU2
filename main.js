let ip = document.getElementById('ip');
let pais = document.getElementById('pais');

// Función para obtener la ubicación y registrar datos enviando la solicitud POST
function registrarDatos() {
  // Hacer una petición para obtener la ubicación
  axios
    .get('https://proyjhq.000webhostapp.com/php-geoip-api/index.php')
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response.data.pais);
      
      pais.innerHTML = response.data.pais;
      let ubicacion = response.data.pais;
      // Obtener los valores del formulario
      let nombre = document.getElementById('nombre').value;
      let edad = document.getElementById('edad').value;

      // Configurar los encabezados para la solicitud POST
    //  let headers = {
    //    'Accept': '*/*',
    //    'Content-Type': 'application/json;charset=UTF-8'
    //  };

      // Enviar la solicitud según la ubicación
      if (ubicacion === 'Argentina') {
        axios.get("https://servarg.000webhostapp.com/api-argentina/index.php?nombre="+ nombre + "&edad=" + edad + "&ubicacion=" + ubicacion)
          .then(function (response) {
            // Manejar respuesta exitosa
            console.log(response.data);
          })
          .catch(function (error) {
            // Manejar error
            console.log(error);
          });
      }
      else if (ubicacion === 'France')
      {
        axios.get("https://servjhq.000webhostapp.com/api-francia/index.php?nombre="+ nombre + "&edad=" + edad + "&ubicacion=" + ubicacion)
        .then(function (response){
          // Manejar respuesta exitosa
          console.log(response);
        })
        .catch(function (error) {
          // Manejar error
          console.log(error);
        });
        
      } else if (ubicacion === 'Japan') {
        axios.get("https://servjap.000webhostapp.com/api-japon/index.php?nombre="+ nombre + "&edad=" + edad + "&ubicacion=" + ubicacion)
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
