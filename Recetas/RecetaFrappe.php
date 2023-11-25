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
        <h2 class="titulo">Frappé</h2>
        
        <div class="Receta">
            <div class="float-text">   
            <br><strong>Tiempo estimado de preparación:</strong> 10-15 minutos
            <br><strong>Dificultad:</strong> Media
            <br>
            <br>
                
            <h2>Ingredientes</h2>
            <br>
            <ul>
                <li>2 cucharadas de café de <a href="../Productos/Cafes/Cafe2.php" class="link-cafe">Puebla</a> molido</li>
                <li>Azúcar al gusto</li>
                <li>Hielo</li>
                <li>Leche (opcional)</li>
                <li>Extracto de vainilla</li>
                <li>Chocolate rallado o cacao en polvo para decorar (opcional)</li>
                <li>Crema batida (opcional)</li>
            </ul>
            </div>
            <div class="imagen-CafeFrappe">
                <img src="../img/RecetaFrappe.png">
            </div>
        </div>
        <div class="Receta">
            <div class="float-text">   
            <h2>Preparación</h2>
            <br>
            <p><strong>Preparación del café</strong><br>
            <br>Utiliza tu cafetera preferida para preparar un café con 2 cucharadas de café de Puebla por cada taza que desees preparar, puedes ajustar esta medida según tus preferencias.Prepara al menos 2 tazas, ya que será la base para el Café Frappé.</p>
            <br>
            <p><strong>Enfriar el café</strong><br>
            <br>
            Una vez preparado, deja que el café se enfríe a temperatura ambiente durante unos minutos y luego refrigéralo hasta que esté frío.</p>
            <br>
            <p><strong>Endulzar el café</strong><br>
            <br>
            Enfría el café endulzándolo al gusto con azúcar o edulcorante, asegurándote de que el azúcar se disuelva por completo.</p>
            <br>
            <p><strong>Mezclar con hielo</strong><br>
            <br>
            Llena una licuadora con hielo hasta la mitad. Vierte el café frío sobre el hielo en la licuadora.</p>
            <br>
            <p><strong>Mezclar la bebida</strong><br>
            <br>
            Licua el café y el hielo hasta obtener una mezcla espumosa y suave. Si prefieres una textura más cremosa, puedes agregar un poco de leche a la mezcla.</p>
            <br>
            <p><strong>Servir</strong><br>
            <br>
            Vierte la mezcla de Café Frappé en un vaso grande. Si lo deseas, añade una capa de crema batida en la parte superior y espolvorea un poco de chocolate rallado o cacao en polvo para decorar.</p>
            <br>
            <p>Esta versión de Café Frappé utiliza café preparado en la cafetera, dándole un sabor más robusto y permitiéndote disfrutar de la frescura y la textura del café helado con un toque casero. ¡Espero que la disfrutes!</p>
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