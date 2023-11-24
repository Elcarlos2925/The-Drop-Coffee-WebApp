<?php

// Configuración de correo electrónico
$para = 'cl154204@gmail.com';
$asunto = 'Confirmación de compra';
$mensaje = 'Su compra a sido completada con exito. ¡¡Gracias por confiar en nosotros!!';
$de = 'From: thedropcoffee.mx@gmail.com'; 
if (mail($para, $asunto, $mensaje, $de)) {
    echo "Correo enviado satisfactoriamente";
} else {
    echo "Error al enviar el correo";
}
?>