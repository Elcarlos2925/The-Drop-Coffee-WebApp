function mostrarCondiciones() {
    var mensaje = "\nLa contraseña debe cumplir con los siguientes requisitos:\n" +
                  "- Al menos 8 caracteres de longitud\n" +
                  "- Al menos una letra mayúscula\n" +
                  "- Al menos una letra minúscula\n" +
                  "- Al menos un número\n" +
                  "- Al menos un carácter especial (por ejemplo, !@#$%^&*)";
  
    var mensajeCondiciones = document.getElementById("mensaje-condiciones");
    mensajeCondiciones.innerText = mensaje;
  }

  function mostrarCondicionesNombre() {
    var mensaje = "\nSolo puede contener letras y espacios.";
  
    var mensajeCondiciones = document.getElementById("mensaje-condiciones-nombre");
    mensajeCondiciones.innerText = mensaje;
  }

  function mostrarCondicionesApellido() {
    var mensaje = "\nSolo puede contener letras y espacios.";
  
    var mensajeCondiciones = document.getElementById("mensaje-condiciones-apellido");
    mensajeCondiciones.innerText = mensaje;
  }

  function mostrarCondicionesCorreo() {
    var mensaje = "\nIntroduce una dirección de correo electrónico válida.";
  
    var mensajeCondiciones = document.getElementById("mensaje-condiciones-email");
    mensajeCondiciones.innerText = mensaje;
  }
  /*function mostrarCondicionesVerificar() {
    var mensaje = "\nLa contraseña debe de ser identica a la de arriba";
  
    var mensajeCondiciones = document.getElementById("mensaje-condiciones-verificar");
    mensajeCondiciones.innerText = mensaje;
  }*/