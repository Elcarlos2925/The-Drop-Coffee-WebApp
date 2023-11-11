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
function numeroTarjeta(valor) {
    // Filtrar caracteres no numéricos
    var numeros = valor.replace(/\D/g, '');

    // Limitar a solo números y dividir en grupos de cuatro dígitos
    var grupos = numeros.match(/(\d{1,4})/g);

    // Unir los grupos con espacio
    var resultado = grupos ? grupos.join(' ') : '';

    // Establecer el valor formateado en el input
    document.getElementById('numeroTarjeta').value = resultado;
}
function formatoTitular(valor) {
     // Filtrar caracteres que no son letras ni espacios
     var titularFormateado = valor.replace(/[^a-zA-Z\s]/g, '');

     // Convertir todas las letras a mayúsculas
     titularFormateado = titularFormateado.toUpperCase();
 
     // Establecer el valor formateado en el input
     document.getElementById('nombreTitular').value = titularFormateado;
}
