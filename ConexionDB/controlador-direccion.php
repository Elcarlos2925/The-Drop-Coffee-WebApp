<?php
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);
//llamar conexión base de datos
include ('../ConexionDB/conexion.php');
if(isset($_POST['guardar-direccion']))
{
    if(strlen($_POST['Nombre-apellido'])              
    >= 1 && strlen($_POST['Codigo-postal'])          
    >= 1 && strlen($_POST['Telefono-contacto'])      
    >= 1 && strlen($_POST['Estado'])                  
    >= 1 && strlen($_POST['Municipio'])                
    >= 1 && strlen($_POST['Calle-colonia'])            
    >= 1 && strlen($_POST['Num-interior'])              
    >= 1 && strlen($_POST['Entre-calles'])              
    >= 1)
    {
        $nombre= trim($_POST['Nombre-apellido']);
        $CP= trim($_POST['Codigo-postal']);
        $telefono= trim($_POST['Telefono-contacto']);
        $estado = trim($_POST['Estado']);
        $municipio = trim($_POST['Municipio']);
        $calle = trim($_POST['Calle-colonia']);
        $num_int = trim($_POST['Num-interior']);
        $num_ext = trim($_POST['Num-exterior']);
        $entre_calles = trim($_POST['Entre-calles']);
        $especificaciones = trim($_POST['Especificaciones']);

        if (empty($num_ext)){
            $num_ext = 'NULL';
        }
        if (empty($especificaciones)){
            $especificaciones = 'NULL';
        }
        //auto incremento
        $id_direccion_result = mysqli_query($conexion, "SELECT MAX(id_direccion) + 1 AS next_id FROM direccion;");
        $row = mysqli_fetch_assoc($id_direccion_result);
        $id_direccion = $row['next_id'];

        $consulta="INSERT INTO `direccion`(`codigo_postal`, `ciudad`, `estado`, `calle`, `entre_calle`, `especificaciones`, `num_int`, `num_ext`, `id_direccion`, `nombre_receptor`, `tel`, `id_usuario`) VALUES ('$CP','$municipio]','$estado','$calle','$entre_calles','$especificaciones','$num_int','$num_ext','$id_direccion','$nombre','$telefono','2');";
        $resultado=mysqli_query($conexion, $consulta);
        header("location:../Card/index.php");
    }
}
?>