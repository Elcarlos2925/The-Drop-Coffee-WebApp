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
    <title>Recetas</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:ital,wght@1,500&display=swap" rel="stylesheet">
</head>

<body>
    <header class="header">
        <div class="nav-logo">
            <a href="../index.php"><img src="../img/Logo-White.png" alt="logo"></a>
        </div>
        <div class="nav-nombre">
            <a href="../index.php"><h2>The Drop Coffee</h2></a>
        </div>
        <nav>
            <ul class="nav-links">
                <li>
                    <a href="../index.php">Inicio</a>
                </li>
                <li>
                    <a href="../Coffee.php">Café</a>
                </li>
                <li>
                    <a href="../Productos.php">Productos</a>
                </li>
                <li>
                    <a href="../Recetas.php">Recetas</a> 
                </li>
                
            </ul>
        </nav>
        
        <div class="botones-izq">
            <div class="btn-car-shop">
                <a href="../Carrito/index.php" class="car-shop"><button><img src="../img/carrito.png" width="auto" height="50%" alt="carrito nav-bar"><span id="numerito" class="numerito">0</span></button></a>
            </div>
            <div class="btn-btn">
                <a href="../../ConexionDB/controlador-cerrar-session.php" class="btn" id="btn-cerrar-sesion">
                <?php echo $usuario ?><span class="material-symbols-outlined" id="ico-cs">login</span></a>
            </div>
        </div>

        <a onclick="openNav()" class="menu" href="#"><button><img src="../img/menu.png" width="auto" height="50%" alt="3 barras horizontales"></button></a>
        <div class="overlay" id="mobile-menu">
            <a onclick="closeNav()"  href="" class="close">&times;</a>
            <div class="overlay-content">
                    <a href="../index.php">Inicio</a>
                    <a href="../Coffee.php">Café</a>
                    <a href="../Productos.php">Productos</a>
                    <a href="../Recetas.php">Recetas</a>
                    <a href="../Carrito/index.php">Carrito</a>
                    <a href="../../ConexionDB/controlador-cerrar-session.php">Cerrar Sesión</a>
            </div>
        </div>

    </header>

    <div class="carrusel">
        <div class="imagen">
            <a href="#" ><img src="../img/BannerContactanos.png" alt="Imagen 1"></a>
        </div>
        <div class="imagen">
            <a href="../Coffee.php"><img src="../img/3.png" alt="Imagen 2"></a>
        </div>
        <div class="imagen">
            <a href="../Productos.php"><img src="../img/4.png" alt="Imagen 3"></a>
        </div>
        <div class="imagen">
            <a href="../index.php"><img src="../img/5.1.png" alt="Imagen 4"></a>
        </div>
        <button class="anterior">&#10094; </button>
        <button class="siguiente"> &#10095;</button>
    </div>
        <h2 class="titulo">Café Helado con Vainilla y Caramelo</h2>
        
        <div class="Receta">
            <div class="float-text">   
            <br><strong>Tiempo estimado de preparación:</strong> 15-20 minutos
            <br><strong>Dificultad:</strong> Media
            <br>
            <br>
                
            <h2>Ingredientes</h2>
            <br>
            <ul>
                <li>2 cucharadas de café de <a href="../Productos/Cafes/Cafe2.php" class="link-cafe">Puebla</a> molido</li>
                <li>Agua</li>
                <li>Azúcar al gusto</li>
                <li>Hielo</li>
                <li>Leche (opcional)</li>
                <li>Extracto de vainilla</li>
                <li>Jarabe de caramelo</li>
                <li>Crema batida (opcional)</li>
            </ul>
            </div>
            <div class="imagen-CafeVainilla">
                <img src="../img/RecetaVainilla.png">
            </div>
        </div>
        <div class="Receta">
            <div class="float-text">   
            <h2>Preparación</h2>
            <br>
            <p><strong>Preparación del café</strong><br>
            <br>Utiliza tu cafetera preferida para preparar un café con 2 cucharadas de café de Puebla por cada taza que desees preparar, puedes ajustar esta medida según tus preferencias.</p>
            <br>
            <p><strong>Endulzar y aromatizar el café</strong><br>
            <br>
            Añade azúcar o edulcorante al café caliente y mezcla bien para que se disuelva por completo. Agrega unas gotas de extracto de vainilla al café y mezcla nuevamente para darle un toque de sabor.</p>
            <br>
            <p><strong>Enfriar el café</strong><br>
            <br>
            Deja enfriar el café a temperatura ambiente y luego refrigéralo durante unos 30 minutos o hasta que esté frío.</p>
            <br>
            <p><strong>Servir el café helado</strong><br>
            <br>
            Llena un vaso con hielo y vierte el café frío sobre el hielo. Si prefieres una versión más suave, puedes agregar un poco de leche al café.</p>
            <br>
            <p><strong>Agregar el toque de caramelo</strong><br>
            <br>
            Agrega un chorrito de jarabe de caramelo al café helado y mezcla suavemente para incorporar el sabor dulce y aromático del caramelo.</p>
            <br>
            <p><strong>Decorar con crema batida (opcional)</strong><br>
            <br>
            Si lo deseas, añade una capa de crema batida encima del café helado para darle un toque más indulgente.</p>
            <br>
            <p>Esta receta es ideal para los días calurosos o cuando quieras disfrutar de un café refrescante con un toque dulce y aromático. La preparación es bastante simple, ya que la mayor parte del tiempo se destina a enfriar el café antes de servirlo con hielo y los aderezos de vainilla y caramelo. ¡Espero que la disfrutes!</p>
            </div>
            </br>
            <hr>
        </div>
        </div>
        <h3 id="compartir-redes">¡No olvides compartir una foto de cómo te quedó en nuestras redes sociales!</h3>

    <footer>
        <hr>
        &copy; 2023 - The Drop Coffee - <a href="">Privacy</a>
    </footer>

    <script type="../text/javascript" src="../js/Nav-Menu.js"></script>
    <script src="../js/script.js"></script>

</body>
</html>
<script src="../js/cafes.js"></script>