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
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/styleRecetas.css">

    <link rel="Website Icon" type="png" href="img/Logosinfondo.png">

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
            <div class="btn-car-shop">
                <a href="Carrito/index.php" class="car-shop"><button><img src="img/carrito.png" width="auto" height="50%" alt="carrito nav-bar"><span id="numerito" class="numerito">0</span></button></a>
            </div>
            <div class="btn-btn">
                <a href="../ConexionDB/controlador-cerrar-session.php" class="btn" id="btn-cerrar-sesion">
                <?php echo $usuario ?><span class="material-symbols-outlined" id="ico-cs">login</span></a>
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
                    <a href="Carrito/index.php">Carrito</a>
                    <a href="Favoritos/index.php">Favoritos</a>
                    <a href="../ConexionDB/controlador-cerrar-session.php">Cerrar Sesión</a>
            </div>
        </div>

    </header>

    <div class="carrusel">
        <div class="imagen">
            <a href="#" ><img src="img/BannerContactanos.png" alt="Imagen 1"></a>
        </div>
        <div class="imagen">
            <a href="Coffee.php"><img src="img/3.png" alt="Imagen 2"></a>
        </div>
        <div class="imagen">
            <a href="Productos.php"><img src="img/4.png" alt="Imagen 3"></a>
        </div>
        <div class="imagen">
            <a href="index.php"><img src="img/5.1.png" alt="Imagen 4"></a>
        </div>
        <button class="anterior">&#10094; </button>
        <button class="siguiente"> &#10095;</button>
    </div>

<!--CONTENEDOR RECETAS-->

<div class="productos">

    <div class="fondo-contenedor">
        <div class="contenedor_producto">
            <div class="imagen-cafe" id="1">
                <a href="Recetas/RecetaFrappe.php"><img src="img/RecetaFrappe.png"></a>
            </div>
            <div class="descripcion-producto">
                <div style="color:#EBE6DF" id="nombre-cafe">Frappé</div>
            </div>
        </div>
    </div>

    <div class="fondo-contenedor">
        <div class="contenedor_producto">
            <div class="imagen-cafe" id="1">
                <a href="Recetas/RecetaAffogato.php"><img src="img/RecetaAffogato.png"></a>
            </div>
            <div class="descripcion-producto">
                <div style="color:#EBE6DF" id="nombre-cafe">Café Affogato</div>
            </div>
        </div>
    </div>

    <div class="fondo-contenedor">
        <div class="contenedor_producto">
            <div class="imagen-cafe">
                <a href="Recetas/RecetaCalabaza.php"><img src="img/CafeCalabaza.jpg"></a>
            </div>
            <div class="descripcion-producto">
                <div style="color:#EBE6DF" id="nombre-cafe">Cappuccino de Calabaza</div>
            </div>
        </div>
    </div>

    <div class="fondo-contenedor">
        <div class="contenedor_producto">
            <div class="imagen-cafe">
                <a href="Recetas/RecetaCoco.php"><img src="img/RecetaCoco.png"></a>
            </div>
            <div class="descripcion-producto">
                <div style="color:#EBE6DF" id="nombre-cafe">Café con Coco y Almendra</div>
            </div>
        </div>
    </div>

    <div class="fondo-contenedor">
        <div class="contenedor_producto">
            <div class="imagen-cafe">
                <a href="Recetas/RecetaIris.php"><img src="img/RecetaIris.png"></a>
            </div>
            <div class="descripcion-producto">
                <div style="color:#EBE6DF" id="nombre-cafe">Café Irish Cream</div>
            </div>
        </div>
    </div>

    <div class="fondo-contenedor">
        <div class="contenedor_producto">
            <div class="imagen-cafe">
                <a href="Recetas/RecetaLecheCanela.php"><img src="img/RecetaLeche.png"></a>
            </div>
            <div class="descripcion-producto">
                <div style="color:#EBE6DF" id="nombre-cafe">Café con Leche Condensada y Canela</div>
            </div>
        </div>
    </div>

    <div class="fondo-contenedor">
        <div class="contenedor_producto">
            <div class="imagen-cafe">
                <a href="Recetas/RecetaMocha.php"><img src="img/RecetaMocha.png"></a>
            </div>
            <div class="descripcion-producto">
                <div style="color:#EBE6DF" id="nombre-cafe">Café Mocha Especial</div>
            </div>
        </div>
    </div>

    <div class="fondo-contenedor">
        <div class="contenedor_producto">
            <div class="imagen-cafe">
                <a href="Recetas/RecetaNaranja.php"><img src="img/RecetaNaranja.png"></a>
            </div>
            <div class="descripcion-producto">
                <div style="color:#EBE6DF" id="nombre-cafe">Café con Esencia de Naranja y Chocolate</div>
            </div>
        </div>
    </div>

    <div class="fondo-contenedor">
        <div class="contenedor_producto">
            <div class="imagen-cafe">
                <a href="Recetas/RecetaNavideña.php"><img src="img/RecetaNavideña.png"></a>
            </div>
            <div class="descripcion-producto">
                <div style="color:#EBE6DF" id="nombre-cafe">Café Especial Navideño</div>
            </div>
        </div>
    </div>

    <div class="fondo-contenedor">
        <div class="contenedor_producto">
            <div class="imagen-cafe">
                <a href="Recetas/RecetaVainilla.php"><img src="img/RecetaVainilla.png"></a>
            </div>
            <div class="descripcion-producto">
                <div style="color:#EBE6DF" id="nombre-cafe">Café Helado con Vainilla y Caramelo</div>
            </div>
        </div>
    </div>

    <div class="fondo-contenedor">
        <div class="contenedor_producto">
            <div class="imagen-cafe">
                <a href="Recetas/RecetaVeracruz.php"><img src="img/RecetaVeracruz.png"></a>
            </div>
            <div class="descripcion-producto">
                <div style="color:#EBE6DF" id="nombre-cafe">Café Veracruzano con espuma de vainilla</div>
            </div>
        </div>
    </div>

    <div class="fondo-contenedor">
        <div class="contenedor_producto">
            <div class="imagen-cafe">
                <a href="Recetas/RecetaVienes.php"><img src="img/RecetaVienes.png"></a>
            </div>
            <div class="descripcion-producto">
                <div style="color:#EBE6DF" id="nombre-cafe">Café Vienés</div>
            </div>
        </div>  
    </div>
</div>

<h3 id="compartir-redes">¡No olvides compartir una foto de cómo te quedó en nuestras redes sociales!</h3>

        <footer>
            <hr>
            &copy; 2023 - The Drop Coffee - <a href="">Privacy</a>
        </footer>

        <script type="text/javascript" src="js/Nav-Menu.js"></script>
    <script src="js/script.js"></script>

</body>
</html>
<script src="js/cafes.js"></script>