<?php
//llamar conexión base de datos
include '../ConexionDB/controlador-inicio-sesion.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="style.css">
    <link rel="Website Icon" type="png" href="../img/Logosinfondo.png">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

</head>
<body>
<div class="mensaje-error">
        <?php
            echo "$mensaje";
        ?>
   </div>
    <div class="Forms-Login" >
        <a href="../index.php"><img src="img/Logo-White.png" id="Logo"></a>
        <h2>Iniciar Sesión</h2>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <label for="email">Correo Electronico:</label>
            <div class="contraseña-contenedor">
                <input type="email" name="email" id="email" placeholder="Ingrese su Correo Electronico" required>
                <button type="button" onclick="mostrarCondicionesCorreo()" class="fas fa-info-circle" id="info-btn1"></button>
            </div>
            <div id="mensaje-condiciones-email"></div>
            <br>

            <label for="contraseña">Contraseña:</label>
            <div class="contraseña-contenedor">
                <input type="password" name="contraseña" id="contraseña" placeholder="Ingrese su Contraseña"  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$" required >
                <span toggle="#contraseña" class="eye"></span>
                <button type="button" onclick="mostrarCondiciones()" class="fas fa-info-circle" id="info-btn"></button>
            </div>
            <div id="mensaje-condiciones"></div>
            <br>
            <input class="btn-is" name="iniciar-sesion" type="submit" value="iniciar sesión">
            <a href="index.php" class="cambio-form">Registrarse</a>

        </form>
</div>
</body>
<script type="text/javascript" src="scripts/mostrar-ocultar.js"></script>
<script type="text/javascript" src="scripts/mensajes-contraseña.js"></script>
</html>