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
                <li>
                    <a href="../Registro/index.php">Favoritos</a>
                </li>
            </ul>
        </nav>
        
        <div class="botones-izq">
            <div class="btn-btn">
                <a href="../Registro/index.php" class="btn"><button>Registrar</button></a>        
            </div>
            <div class="btn-car-shop">
                <a href="../Registro/index.php" class="car-shop"><button><img src="../img/carrito.png" width="auto" height="50%" alt="carrito nav-bar"><span id="numerito" class="numerito">0</span></button></a>
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
                    <a href="../Registro/sign-in.php">Registrar</a>
                    <a href="../Registro/index.php">Carrito</a>
                    <a href="../Registro/index.php">Favoritos</a>
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
        <h2 class="titulo">Café Veracruzano con espuma de vainilla</h2>
        
        <div class="Receta">
            <div class="float-text">   
            <br><strong>Tiempo estimado de preparación:</strong> 10-15 minutos
            <br><strong>Dificultad:</strong> Fácil 
            <br>
            <br>
                
            <h2>Ingredientes</h2>
            <br>
            <ul>
                <li>2 cucharadas de café de <a href="../Productos/Cafes/Cafe1.php" class="link-cafe">Veracruz</a> molido</li>
                <li>Agua</li>
                <li>Azúcar al gusto (opcional)</li>
                <li>Extracto de vainilla</li>
                <li>Leche</li>
                <li>Crema batida (opcional)</li>
            </ul>
            </div>
            <div class="imagen-CafeVeracruz">
                <img src="../img/RecetaVeracruz.png">
            </div>
        </div>
        <div class="Receta">
            <div class="float-text">   
            <h2>Preparación</h2>
            <br>
            <p><strong>Preparación del café</strong><br>
            <br>Utiliza tu cafetera preferida para preparar un café con 2 cucharadas de café de Veracruz por cada taza que desees preparar, puedes ajustar esta medida según tus preferencias.</p>
            <br>
            <p><strong>Hacer la espuma de vainilla</strong><br>
            <br>
            En lo que el café se prepara, calienta un poco de leche en un recipiente aparte y añade una pizca de extracto de vainilla. Luego, usa un batidor de mano o una licuadora de mano para crear espuma. Si tienes un vaporizador de leche, también puedes utilizarlo para hacer la espuma con la leche y el extracto de vainilla.</p>
            <br>
            <p><strong>Endulzar (opcional)</strong><br>
            <br>
            Agrega azúcar al café preparado, si lo deseas, y mezcla bien para que se disuelva por completo.</p>
            <br>
            <p><strong>Servir</strong><br>
            <br>
            Sirve el café en tazas individuales y vierte la espuma de vainilla sobre la superficie del café. La espuma debe quedar encima del café, creando una capa deliciosa y aromática. Opcionalmente, puedes añadir un poco de crema batida en la parte superior para decorar.</p>
            <br>
            <p>Esta receta combina el delicioso café de Veracruz con el toque suave y aromático de la espuma de vainilla, creando una experiencia más elaborada y deliciosa. ¡Espero que te guste!</p>
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