<?php
include("../ConexionDB/controlador-direccion.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar</title>
    <link rel="stylesheet" href="style.css">
    <link rel="Website Icon" type="png" href="../img/Logosinfondo.png">


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="fondo-contenedor">
        <form method="post">
            <div class="centrar-formulario-direccion">
                <div id="renglon1">
                    
                    <div class="input">
                        <label for="Nombre-apellido">Nombre y apellido<span style="color: rgb(170, 56, 56);">*</span></label>
                        <div id="nomnbre-apellido">
                            <input type="text" name="Nombre-apellido"  id="Nombre-apellido" placeholder="Ingrese  nombre y apellido"  required>
                        </div>
                    </div>
                    
                    <div class="input">
                        <label for="Telefono-contacto">Teléfono de contacto<span style="color: rgb(170, 56, 56);">*</span></label>
                        <div id="telefono-contacto">
                            <input type="text" name="Telefono-contacto"  id="Telefono-contacto" placeholder="Ingrese teléfono de contato"  required>
                        </div>
                    </div>
    
                </div>
    
                <div id="renglon2">
    
                    <div class="input">
                        <label for="Codigo-postal">Código  postal<span style="color: rgb(170, 56, 56);">*</span></label>
                        <div id="codigo-postal">
                            <input type="text" name="Codigo-postal"  id="Codigo-postal" placeholder="Ingrese c.p."  required>
                        </div>
                    </div>
                    
                    <div class="input">
                        <label for="Estado">Estado<span style="color: rgb(170, 56, 56);">*</span></label>
                        <div id="estado">
                            <input type="text" name="Estado"  id="Estado" placeholder="Ingrese Estado"  required>
                        </div>
                    </div>
            
                    <div class="input">
                        <label for="Municipio">Municipio<span style="color: rgb(170, 56, 56);">*</span></label>
                        <div id="municipio">
                            <input type="text" name="Municipio"  id="Municipio" placeholder="Ingrese Municipio"  required>
                        </div>
                    </div>
    
                </div>
    
                <div id="renglon3">
                    
                    <div class="input">
                        <label for="Calle-colonia">Calle y colonia<span style="color: rgb(170, 56, 56);">*</span></label>
                        <div id="calle-colonia">
                            <input type="text" name="Calle-colonia"  id="Calle-colonia" placeholder="Ingrese calle y colonia"  required>
                        </div>
                    </div>
            
                    <div class="input">
                        <label for="Num-interior">Núm interior<span style="color: rgb(170, 56, 56);">*</span></label>
                        <div id="num-int">
                            <input type="text" name="Num-interior" id="Num-interior"   required>
                        </div>
                    </div>
            
                    <div class="input">
                        <label for="Num-exterior">Núm exterior<span style="color: rgb(195, 195, 195);"> (opcional)</span></label>
                        <div id="num-ext">
                            <input type="text" name="Num-exterior"  id="Num-exterior" >
                        </div>
                    </div>
    
                </div>
    
                <div id="renglon4">
    
                    <div class="input">
                        <label for="Entre-calles">Entre calles<span style="color: rgb(170, 56, 56);">*</span></label>
                        <div id="entre-calles">
                            <input type="text" name="Entre-calles"  id="Entre-calles" placeholder=""  required>    
                        </div>
                    </div>
    
                    <div class="input">
                        <label for="Especificaciones">Especificaciones<span style="color: rgb(195, 195, 195);"> (opcional)</span></label>
                        <div id="especificaciones">
                            <input type="text" name="Especificaciones"  id="Especificaciones" placeholder="Descripción de su casa, color etc." >
                        </div>
                    </div>

                </div>

                <input class="" type="submit" name="guardar-direccion" id="guardar-direccion" value="Continuar">
            </div>
        </form>
    </div>

<!--<div class="mensaje-error">
        <?php
           //echo "$mensaje";
        ?>
   </div>
    <div class="Forms-Login">
        <a href="../index.php"><img src="img/Logo-White.png" id="Logo"></a>
        <h2>Registrar Dirección</h2>
        <form method="post">-->
</body>
<script type="text/javascript" src="scripts/mostrar-ocultar.js"></script>
<script type="text/javascript" src="scripts/mensajes-contraseña.js"></script>
</html>