<?php
//solicitar el archivo de conexión a la base de datos
include 'Base-de-datos/conexion.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="Website Icon" type="png" href="img/Logosinfondo.png">


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:ital,wght@1,500&display=swap" rel="stylesheet">

</head>

<body>

    <header class="header">
        <div class="nav-logo">
            <a href="index.php"><img src="img/Logo-White.png" alt="logo"></a>
        </div>
        <div class="nav-nombre">
            <a href="index.php"><h2>The Drop Coffee</h2></a>
            </div>
        <nav>
            <ul class="nav-links">
                <li>
                    <a href="index.php">Inicio</a>
                </li>
                <li>
                    <a href="Coffee.php">Café</a>
                </li>
                <li>
                    <a href="Productos.php">Productos</a>
                </li>
                <li>
                    <a href="Recetas.php">Recetas</a>
                </li>
                <li>
                    <a href="Favoritos/index.php">Favoritos</a>
                </li>
            </ul>
        </nav>
        
        <div class="botones-izq">
            <div class="btn-btn">
                <a href="Registro/index.php" class="btn"><button>Registrar</button></a>        
            </div>
            <div class="btn-car-shop">
                <a href="Carrito/index.php" class="car-shop"><button><img src="img/carrito.png" width="auto" height="50%" alt="carrito nav-bar"><span id="numerito" class="numerito">0</span></button></a>
            </div>
        </div>

        <a onclick="openNav()" class="menu" href="#"><button><img src="img/menu.png" width="auto" height="50%" alt="3 barras horizontales"></button></a>
        <div class="overlay" id="mobile-menu">
            <a onclick="closeNav()"  href="" class="close">&times;</a>
            <div class="overlay-content">
                    <a href="index.php">Inicio</a>
                    <a href="Coffee.php">Café</a>
                    <a href="Productos.php">Productos</a>
                    <a href="Recetas.php">Recetas</a>
                    <a href="Registro/index.php">Registrar</a>
                    <a href="Carrito/index.php">Carrito</a>
                    <a href="Favoritos/index.php">Favoritos</a>
            </div>
        </div>

    </header>

    <div class="carrusel">
        <div class="imagen">
            <a href="Recetas.php" ><img src="img/1.png" alt="Imagen 1"></a>
        </div>
        <div class="imagen">
            <a href="Coffee.php"><img src="img/3.png" alt="Imagen 2"></a>
        </div>
        <div class="imagen">
            <a href="Productos.php"><img src="img/4.png" alt="Imagen 3"></a>
        </div>
        <div class="imagen">
            <a href="#"><img src="img/BannerContactanos.png" alt="Imagen 4"></a>
        </div>
        <button class="anterior">&#10094; </button>
        <button class="siguiente"> &#10095;</button>
    </div>


    <div class="historia">
        <div class="float-text">
            <h2>Nuestra historia</h2>
            <br>
            <p>
                The drop coffee se fundó en el año 2018 en  una pequeña sucursal ubicada en la ciudad de Tijuana, donde nos comprometimos a ofrecer a nuestros clientes una experiencia inigualable al brindar productos de café de la más alta calidad y deliciosos alimentos. A raíz de la pandemia nos vimos en la necesidad de adaptarnos a las circunstancias y encontrar soluciones innovadoras. Nos dimos cuenta de que podíamos llevar la auténtica experiencia de The Drop Coffee directamente a los hogares de las familias amantes del café.
                <br><br>Así nació nuestra iniciativa para ofrecer nuestro exquisito accesorios y café para preparar en casa. Desarrollamos una plataforma en línea fácil de usar, donde los aficionados al café de todo México pueden explorar nuestra selección cuidadosamente seleccionada de granos frescos y equipos especializados para preparar la taza perfecta.
                <br><br> Agradecidos por el apoyo continuo de nuestra comunidad en México, que nos ha permitido crecer y seguir compartiendo nuestra pasión por el café con cada taza que se sirve en los hogares de todo el país. Gracias a ellos, The Drop Coffee se ha convertido en un nombre de confianza para los amantes del café en México, y seguimos comprometidos con nuestra misión de llevar la experiencia del café premium directamente a sus puertas.
            </p>
        </div>
        <div class="imagen-historia">
            <img src="img/5.png"  alt="imagen letrero de cafeteria">
        </div>
    </div>

<footer>
    <hr>
    &copy; 2023 - The Drop Coffee - <a href="">Privacy</a>
</footer>

    <script src="js/script.js"></script>
    <script type="text/javascript" src="js/Nav-Menu.js"></script>
</body>
</html>
<script src="js/cafes.js"></script>