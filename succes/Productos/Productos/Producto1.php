<?php
    include ("ConexionDB/limites-accesos-login.php");
    session_start();

$usuario = $_SESSION['usuario'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Producto</title>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="../../css/style-Coffee.css">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

</head>
<body>

    <header class="header">
        <div class="nav-logo">
            <a href="../../index.php"><img src="../../img/Logo-White.png" alt="logo"></a>
        </div>
        <div class="nav-nombre">
            <a href="../../index.php"><h2>The Drop Coffee</h2></a>
        </div>
        <nav>
            <ul class="nav-links">
                <li>
                    <a href="../../index.php">Inicio</a>
                </li>
                <li>
                    <a href="../../Coffee.php">Café</a>
                </li>
                <li>
                    <a href="../../Productos.php">Productos</a>
                </li>
                <li>
                    <a href="../../Recetas.php">Recetas</a> 
                </li>
                
            </ul>
        </nav>
        
        <div class="botones-izq">
            <div class="btn-car-shop">
                <a href="../../Carrito/index.php" class="car-shop"><button><img src="../../img/carrito.png" width="auto" height="50%" alt="carrito nav-bar"><span id="numerito" class="numerito">0</span></button></a>
            </div>
            <div class="btn-btn">
                <a href="../../../ConexionDB/controlador-cerrar-session.php" class="btn" id="btn-cerrar-sesion">
                <?php echo $usuario ?><span class="material-symbols-outlined" id="ico-cs">login</span></a>
            </div>
        </div>

        <a onclick="openNav()" class="menu" href="#"><button><img src="../../img/menu.png" width="auto" height="50%" alt="3 barras horizontales"></button></a>
        <div class="overlay" id="mobile-menu">
            <a onclick="closeNav()"  href="" class="close">&times;</a>
            <div class="overlay-content">
                   <a href="../../index.php">Inicio</a>
                    <a href="../../Coffee.php">Café</a>
                    <a href="../../Productos.php">Productos</a>
                    <a href="../../Recetas.php">Recetas</a>
                    <a href="../../Carrito/index.php">Carrito</a>
                    <a href="../../../ConexionDB/controlador-cerrar-session.php">Cerrar Sesión</a>
            </div>
        </div>

    </header>



<div id="contenedor-producto-vista" class="contenedor-producto-vista">
    <!--Aqui se autorellena-->
</div>

<footer>
    <hr>
    &copy; 2023 - The Drop Coffee - <a href="">Privacy</a>
</footer>

</body>
<script type="text/javascript" src="../../js/Nav-Menu.js"></script>
</html>
<script src="js/Producto1.js"></script>
<script src="../script.js"></script>