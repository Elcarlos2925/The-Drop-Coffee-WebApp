<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//llamar conexión base de datos
include '../ConexionDB/conexion.php';
$mensaje = '';
if(isset($_POST['iniciar-sesion'])){

    //ruser r=recuperar user=usuario por que luego llora el niño omar psdt:carita enojada
    $ruser = $conexion->real_escape_string($_POST['email']);
    //pass de password
    $rpass = $conexion->real_escape_string(md5($_POST['contraseña']));
    $consulta = "SELECT * FROM usuarios WHERE correo_electronico='$ruser' and contraseña='$rpass'";
    if($resultado = $conexion->query($consulta)){
        while($row = $resultado->fetch_array()){
            $uservalid = $row["correo_electronico"];
            $passwordvalid = $row["contraseña"];
        }
        $resultado->close();
    }
    $conexion->close();
    if(isset($ruser) && isset($rpass)){
        if($ruser == $uservalid && $rpass == $passwordvalid){
            $_SESSION['login'] = true;
            $_SESSION['usuario'] = $usuario;
            header("location:../index.php");
            $uservalid=1;
        }
        else{
/*            header("location:login.php");*/
$mensaje.="<div class='contenedor-mensaje'>
                        <strong>Usuario no valido: </strong> El usuario no se encuatra registrado, registre un usuario valido para iniciar sesión.    
                        </div>";
        }
    }
    else{
        /*            header("location:login.php");*/
                      $mensaje.="<div class='contenedor-mensaje'>
                                <strong>Usuario no valido</strong> El usuario no se encuatra registrado en el sistema consulta a soporte.
                                <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                                </button>
                                </div>";
                }
        
}
?>