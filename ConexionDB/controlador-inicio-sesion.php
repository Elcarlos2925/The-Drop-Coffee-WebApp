<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Iniciar la sesión (asegúrate de hacer esto al principio de tus archivos PHP)
session_start();

// Llamar conexión a la base de datos
include '../ConexionDB/conexion.php';

$mensaje = '';
$uservalid = 0;

if (isset($_POST['iniciar-sesion'])) {
    // Recuperar usuario y contraseña
    $ruser = $conexion->real_escape_string($_POST['email']);
    $rpass = $conexion->real_escape_string(md5($_POST['contraseña']));

    // consulta SQL
    $consulta = "SELECT nombre_usuario, contraseña FROM usuarios WHERE correo_electronico='$ruser'";

    // Verificar las credenciales
    if ($resultado = $conexion->query($consulta)) {
        while ($row = $resultado->fetch_array()) {
            $nombreUsuario = $row["nombre_usuario"];
            $passwordvalid = $row["contraseña"];

            if ($rpass == $passwordvalid) {
                // Almacenar el nombre del usuario en la sesión
                $_SESSION['login'] = true;
                $_SESSION['usuario'] = $nombreUsuario;
                $_SESSION['correo_para'] = $ruser;

                // Redirigir a la página de inicio
                header("location:../succes/index.php");
                $uservalid = 1;
            } else {
                $mensaje .= "<div class='contenedor-mensaje'>
                                <strong>Contraseña incorrecta: </strong> Verifica tu contraseña e intenta de nuevo.
                              </div>";
            }
        }
        $resultado->close();
    } else {
        $mensaje .= "<div class='contenedor-mensaje'>
                        <strong>Error en la consulta</strong> Por favor, contacta al soporte.
                        <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
                            <span aria-hidden='true'>&times;</span>
                        </button>
                    </div>";
    }
    $conexion->close();
}
?>
