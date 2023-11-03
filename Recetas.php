<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recetas</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/style-Recetas.css">

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
                    <a href="Registro/sign-in.php">Registrar</a>
                    <a href="Carrito/index.php">Carrito</a>
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
        <h1 class="titulo">Receta Cappuccino de Calabaza al estilo The Drop Coffee</h1>
        
        <div class="Receta">
            <div class="float-text">           
            <h2>Ingredientes</h2>
            <br>
            <ul>
                <li>1 taza de café Americano especial <a href="Coffee.php" class="link-cafe">The Drop Coffee</a></li>
                <li>1/4 de taza de puré de calabaza</li>
                <li>1/2 taza de leche de nuestra preferencia</li>
                <li>2 cucharadas de azúcar morena</li>
                <li>1/2 cucharadita de canela en polvo</li>
                <li>1/4 de cucharadita de nuez moscada</li>
                <li>1/4 de cucharadita de jengibre en polvo</li>
                <li>1/4 de cucharadita de extracto de vainilla</li>
                <li>Crema batida (opcional)</li>
                <li>Canela molida (para decorar, opcional)</li>
            </ul>
            </div>
            <div class="imagen-CafeCalabaza">
                <img src="img/CafeCalabaza.jpg">
            </div>
        </div>
        <div class="Receta">
            <div class="float-text">   
                <h2>Preparación</h2>
            <br>
            <p><strong>Paso 1.</strong> En una olla pequeña, combina el puré de calabaza, la leche, el azúcar moreno, la canela en polvo, la nuez moscada y el jengibre en polvo. Cocina a fuego medio-bajo, revolviendo constantemente, hasta que la mezcla esté caliente pero no hierva. Asegúrate de que todos los ingredientes estén bien incorporados.</p>
            <p><strong><br>Paso 2.</strong> Retira la mezcla del fuego y agrégale el extracto de vainilla. Revuelve para mezclar.</p>
            <p><strong><br>Paso 3.</strong> Prepara una taza de café Americano especial The Drop Coffee.</p>
            <p><strong><br>Paso 4.</strong> Vierte el café caliente en una taza grande y luego agrega la mezcla de calabaza caliente. Revuelve bien para combinar todos los sabores.</p>
            <p><strong><br>Paso 5.</strong> Si lo deseas, puedes decorar tu cappuccino de calabaza con crema batida y espolvorear un poco de canela molida por encima.</p>
            <p><strong><br>Paso 6.</strong> ¡Disfruta de tu cappuccino de calabaza casero!</p>
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

    <script type="text/javascript" src="js/Nav-Menu.js"></script>
    <script src="js/script.js"></script>

</body>
</html>