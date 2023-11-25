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
        <h2 class="titulo">Café Mocha Especial</h2>
        
        <div class="Receta">
            <div class="float-text">   
            <br><strong>Tiempo estimado de preparación:</strong> 10-15 minutos
            <br><strong>Dificultad:</strong> Fácil 
            <br>
            <br>
                
            <h2>Ingredientes</h2>
            <br>
            <ul>
                <li>2 cucharadas de café de <a href="../Productos/Cafes/Cafe3.php" class="link-cafe">Chiapas</a> molido</li>
                <li>Agua</li>
                <li>2 cucharaditas de cacao en polvo</li>
                <li>Azúcar o edulcorante al gusto</li>
                <li>Leche</li>
                <li>Crema batida (opcional)</li>
                <li>Chocolate rallado o cacao en polvo para decorar (opcional)</li>
            </ul>
            </div>
            <div class="imagen-CafeMocha">
                <img src="../img/RecetaMocha.png">
            </div>
        </div>
        <div class="Receta">
            <div class="float-text">   
            <h2>Preparación</h2>
            <br>
            <p><strong>Preparación del café</strong><br>
            <br>Utiliza tu cafetera preferida para preparar un café con 2 cucharadas de café de Chiapas por cada taza que desees preparar, puedes ajustar esta medida según tus preferencias.</p>
            <br>
            <p><strong>Mezcla de Mocha</strong><br>
            <br>
            En una taza, mezcla el café recién preparado con el cacao en polvo. Revuelve bien para que se integren los sabores.</p>
            <br>
            <p><strong>Endulzar</strong><br>
            <br>
            Añade azúcar o edulcorante al gusto y mezcla hasta que se disuelva por completo en la mezcla de café y cacao.</p>
            <br>
            <p><strong>Calentar la leche</strong><br>
            <br>
            En un recipiente aparte, calienta la leche (puede ser en el microondas o en una cacerola pequeña) sin dejar que hierva.</p>
            <br>
            <p><strong>Agregar la leche</strong><br>
            <br>
            Vierte la leche caliente sobre la mezcla de café y cacao. Mezcla todo para incorporar la leche al café</p>
            <br>
            <p><strong>Crema batida y decoración (opcional)</strong><br>
            <br>
            Si lo deseas, añade una capa de crema batida encima del café mocha. Puedes espolvorear un poco de chocolate rallado o cacao en polvo sobre la crema batida para decorar.</p>
            <br>
            <p>Esta receta es relativamente sencilla, el tiempo se divide principalmente entre la preparación del café, la mezcla con el cacao, el calentamiento de la leche y la adición de la crema batida y decoración si decides agregarlos. Es una deliciosa variante de café para los amantes del chocolate, perfecta para consentirte en cualquier momento.</p>
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