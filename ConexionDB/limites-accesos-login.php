<?php
    error_reporting(E_ALL);
    include '../ConexionDB/controlador-inicio-sesion.php';
    $uservalid;
    $inicio_sesion="";
    if($uservalid == 1){
        /* habilitar producto para hacer que se agregue al carrito*/
        echo"ya hay una sesion iniciada";
    }
    else{
        /* dirigir a inicio de sesion */
    }
?>