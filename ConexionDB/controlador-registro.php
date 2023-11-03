<?php
//llamar conexión base de datos
include ('../ConexionDB/conexion.php');
if(isset($_POST['Registrar']))
{
    if(strlen($_POST['nombre']) >= 1 && strlen($_POST['apellido']) >= 1 && strlen($_POST['email']) >= 1 && strlen($_POST['contraseña']) >= 1 && strlen($_POST['verificar-contraseña']) >= 1)
    {
        $nombre = trim($_POST['nombre']);
        $apellido = trim($_POST['apellido']);
        $email = trim($_POST['email']);
        $contraseña = trim($_POST['contraseña']);
        $validar_contraseña = trim($_POST['verificar-contraseña']);
        if ($contraseña == $validar_contraseña)
        {
            $contraseña_encriptada = md5($contraseña);
            //auto incremento
            $id_usuario_result = mysqli_query($conexion, "SELECT MAX(id_usuario) + 1 AS next_id FROM usuarios;");
            $row = mysqli_fetch_assoc($id_usuario_result);
            $id_usuario = $row['next_id'];

            $consulta="INSERT INTO `usuarios`(`id_usuario`, `nombre_usuario`, `apellido_usuario`, `contraseña`, `correo_electronico`) VALUES ('$id_usuario','$nombre','$apellido','$contraseña_encriptada','$email');";
            $resultado=mysqli_query($conexion, $consulta);
            $mensaje="<div class='contenedor-mensaje-succes'>
                    <strong>Usuario creado exitosamente.</strong>
                    </div>";
        }
        else{
            $mensaje="<div class='contenedor-mensaje'>
            <strong>Contraseña no valida</strong> Las contraseñas ingresadas no coinciden, intentelo nuevamente.
            </div>";
        }
    }
    else{
        $mensaje="<div class='contenedor-mensaje'>
                    <strong>hubo un error en el registro</strong> por favor, llena todos los campos.
                    </div>";
    }
}
?>