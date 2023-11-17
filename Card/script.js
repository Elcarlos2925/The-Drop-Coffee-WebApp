function formatoFecha(input) {
    // Eliminar caracteres no numéricos
    var valor = input.value.replace(/\D/g, '');

    // Asegurarse de que no se ingresen más de 4 caracteres
    if (valor.length > 4) {
        valor = valor.substr(0, 4);
    }

    // Separar mm y yy
    var mes = valor.substr(0, 2);
    var anio = valor.substr(2, 2);

    // Construir la fecha con el formato deseado
    var fechaFormateada = mes + '/' + anio;

    // Establecer el valor formateado en el input
    input.value = fechaFormateada;
}
function numeroTarjeta1(valor) {
  // Filtrar caracteres no numéricos
  var numeros = valor.replace(/\D/g, '');

  // Limitar a solo números y dividir en grupos de cuatro dígitos
  var grupos = numeros.match(/(\d{1,4})/g);

  // Unir los grupos con espacio
  var resultado = grupos ? grupos.join(' ') : '';

  // Establecer el valor formateado en el input
  document.getElementById('numeroTarjeta').value = resultado;
}
function cvvTarjeta(valor) {
    // Filtrar caracteres no numéricos
    var numeros = valor.replace(/\D/g, '');

    // Limitar a solo números y dividir en grupos de cuatro dígitos
    var grupos = numeros.match(/(\d{1,4})/g);

    // Unir los grupos con espacio
    var resultado = grupos ? grupos.join(' ') : '';

    // Establecer el valor formateado en el input
    document.getElementById('cvv').value = resultado;
}
function formatoTitular(valor) {
     // Filtrar caracteres que no son letras ni espacios
     var titularFormateado = valor.replace(/[^a-zA-Z\s]/g, '');

     // Convertir todas las letras a mayúsculas
     titularFormateado = titularFormateado.toUpperCase();
 
     // Establecer el valor formateado en el input
     document.getElementById('nombreTitular').value = titularFormateado;
}

function handleCheckboxChange() {
          var checkbox = document.getElementById('btn-switch');
          var cardContainer = document.getElementById('card-container');
    
          // Si el checkbox está marcado, añade la clase 'checked' al contenedor, de lo contrario, retírala
          if (checkbox.checked) {
            cardContainer.classList.add('checked');
          } else {
            cardContainer.classList.remove('checked');
          }
        }
    
        // Agrega un event listener al checkbox para detectar cambios
        document.getElementById('btn-switch').addEventListener('change', handleCheckboxChange);