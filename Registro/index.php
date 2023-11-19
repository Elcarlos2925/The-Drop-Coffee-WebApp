<?php
$mensaje='';
$mensaje1='';
$mensaje2='';
$mensaje3='';
$mensaje4='';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $email = $_POST["email"];
    $contrasena = $_POST["contraseña"];

    // Verificar si el nombre contiene solo letras y espacios
    if (!preg_match("/^[A-Za-z\s]+$/", $nombre)) {
        $mensaje1="<div class='contenedor-mensaje'>
            <strong>Error de formato.</strong> El espacio Nombre solo permite ingresar letras y números, intentelo nuevamente.
            </div><br>";
    }
    if (!preg_match("/^[A-Za-z\s]+$/", $apellido)) {
        $mensaje2="<div class='contenedor-mensaje'>
            <strong>Error de formato.</strong> El espacio Apellidos solo permite ingresar letras y números, intentelo nuevamente.
            </div><br>";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mensaje3="<div class='contenedor-mensaje'>
        <strong>Correo electrónico no es válido.</strong> Introduzca un correo electronico valido, intentelo nuevamente.
        </div><br>";
    }
    if (!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/', $contrasena)) {
        $mensaje4="<div class='contenedor-mensaje'>
        <strong>Error de Formato.</strong> La contraseña debe cumplir con los siguientes requisitos:
        - Al menos 8 caracteres de longitud.<br>
        - Al menos una letra mayúscula.<br>
        - Al menos una letra minúscula.<br>
        - Al menos un número.<br>
        - Al menos un carácter especial (por ejemplo, !@#$%^&*). <br> intentelo nuevamente.
        </div><br>";
    }
}
if (empty($mensaje1) && empty($mensaje2) && empty($mensaje3) && empty($mensaje4)) {
    include("../ConexionDB/controlador-registro.php");
}
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
    <div class="mensaje-error">
            <?php
                echo "$mensaje";
                echo "$mensaje1";
                echo "$mensaje2";
                echo "$mensaje3";
                echo "$mensaje4";
            ?>
    </div>
    <div class="Forms-Login">
        <a href="../index.php"><img src="img/Logo-White.png" id="Logo"></a>
        <h2>Crear Cuenta</h2>
        <form method="post">
            <label for="nombre">Nombre:</label>
            <div class="contraseña-contenedor">
                <input type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre" oninput="validarNombre(this.value)" required>
            </div>
            <br>
            <label for="apellido">Apellidos:</label>
            <div class="contraseña-contenedor">
                <input type="text" name="apellido" id="apellido" placeholder="Ingrese sus Apellidos" oninput="validarApellido(this.value)" required>
            </div>
            <br>
            <label for="email">Correo Electronico:</label>
            <div class="contraseña-contenedor">
                <input type="email" name="email" id="email" placeholder="Ingrese su Correo Electronico" required>
                <button type="button" onclick="mostrarCondicionesCorreo()" class="fas fa-info-circle" id="info-btn1"></button>
            </div>
            <div id="mensaje-condiciones-email"></div>
            <br>
            <label for="contraseña">Contraseña:</label>
            <div class="contraseña-contenedor">
                <input type="password" name="contraseña" id="contraseña" placeholder="Ingrese su Contraseña" required>
                <span toggle="#contraseña" class="eye"></span>
                <button type="button" onclick="mostrarCondiciones()" class="fas fa-info-circle" id="info-btn1"></button>
            </div>
            <div id="mensaje-condiciones"></div>
            <br>
            <label for="verificar-contraseña">Verificar Contraseña:</label>
            <div class="contraseña-contenedor">
                <input type="password" name="verificar-contraseña" id="verificar-contraseña" placeholder="Ingrese su Contraseña" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$"  required>
                <span toggle="#verificar-contraseña" class="eye1"></span>
                <!--<button type="button" onclick="mostrarCondicionesVerificar()" class="fas fa-info-circle" id="info-btn1"></button>-->
            </div>
            <div id="mensaje-condiciones-verificar"></div>
            <br>
            <input class="btn-is" type="submit" name="Registrar" value="Registrarse">

            <a href="sign-in.php" class="cambio-form">¿Ya tienes una cuenta?</a>
        </form>
    </div>
</body>
<script type="text/javascript" src="scripts/mostrar-ocultar.js"></script>
<script type="text/javascript" src="scripts/mensajes-contraseña.js"></script>
</html>