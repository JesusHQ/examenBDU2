let pais = document.getElementById('pais');

function registrarDatos() {
  axios
    .get('https://proyjhq.000webhostapp.com/php-geoip-api/index2.php')
    .then(function (response) {
      pais.innerHTML = response.data.pais;
      let nombre = document.getElementById('nombre').value;
      let edad = document.getElementById('edad').value;
      let ubicacion = response.data.pais;

      let datos = {
        nombre: nombre,
        edad: edad
        //ubicacion: response.data.pais
      };

       let headers = {
        'Content-Type': 'application/json;charset=UTF-8'
      };
      
      if (ubicacion === 'Argentina') {
        axios.post('https://tu-api-argentina.com/tu-ruta', datos, { http2: false })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (ubicacion === 'France') {
        axios.post('https://servjhq.000webhostapp.com/api-francia/index.php', datos)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (ubicacion === 'Angola') {
        axios.post('https://tu-api-angola.com/tu-ruta', datos, { http2: false })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log('Ubicación no reconocida');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

window.addEventListener('load', registrarDatos);
