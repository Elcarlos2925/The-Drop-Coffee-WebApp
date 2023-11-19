<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="../../css/style-Coffee.css">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

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
                <li>
                    <a href="../../Favoritos/index.php">Favoritos</a>
                </li>
            </ul>
        </nav>
        
        <div class="botones-izq">
            <div class="btn-btn">
                <a href="../../Registro/index.php" class="btn"><button>Registrar</button></a>        
            </div>
            <div class="btn-car-shop">
                <a href="../../Carrito/index.php" class="car-shop"><button><img src="../../img/carrito.png" width="auto" height="50%" alt="carrito nav-bar"><span id="numerito" class="numerito">0</span></button></a>
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
                    <a href="../../Registro/index.php">Registrar</a>
                    <a href="../../Carrito/index.php">Carrito</a>
                    <a href="../../Favoritos/index.php">Favoritos</a>
            </div>
        </div>

    </header>



<div id="contenedor-producto-vista" class="contenedor-producto-vista">

    <!-- <div class="fondo-contenedor-producto" id="fondo-contenedor-producto">            
       <div class="carrusel-datos">

            <div class="carrusel-btn">
                <button class="anterior-producto">&#10094; </button>
                <div class="carrusel-producto-completo">
                    <div class="imagen-productos-completo">
                        <img src="../img/CV1.png">
                    </div>
                    <div class="imagen-productos-completo">
                        <img src="../img/CV2.png">
                    </div>
                    <div class="imagen-productos-completo">
                        <img src="../img/CV3.png">
                    </div>
                </div>
                <button class="siguiente-producto"> &#10095;</button>
            </div>
            
            <div class="contenedor-datos-producto">
                
                <div class="titulo">
                    Bolsa de Veracruz 300 g
                </div>
                <div class="calific-like-share">
                    <div class="calificacion-contenedor">
                        <div id="descripción-calificacion">
                            Calificación:
                        </div>
                        <div id="cal-5btn">
                            <div id="calificacion">
                                <h5>
                                    4.0
                                </h5>
                            </div>
                            <div class="btn-calificacion">
                                <button id="estrellas">
                                    <i class="fas fa-coffee"></i>
                                </button>
                                <button id="estrellas">
                                    <i class="fas fa-coffee"></i>
                                </button>
                                <button id="estrellas">
                                    <i class="fas fa-coffee"></i>
                                </button>
                                <button id="estrellas">
                                    <i class="fas fa-coffee"></i>
                                </button>
                                <button id="estrellas-deshabilitada">
                                    <i class="fas fa-coffee"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="like-share">
                        <button class="like">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="share">
                            <i class="fas fa-link"></i>
                        </button>
                    </div>
                </div>
                <div class="precio-mxn-completo">
                    <div class="precio-completo">
                        <h5 class="signo-dollar">
                            $
                        </h5>
                        <h5>
                            250.00
                        </h5>
                    </div>
                    <div class="mxn-completo">
                        <h5>
                            MXN
                        </h5>
                    </div>
                </div>
                <div class="contenedor-cant-comp-addcar">
                    <div class="cantidad-completo">
                        <div class="centrar-cantidad-contenedor">
                            <div class="cantidad-contenedor">

                                <div id="left">
                                    <button id="menos-completo">-</button>
                                </div>
                                
                                <div id="label-cantidad">
                                    <label for="cantidad" id="cantidad-completo">1</label>
                                </div>
                                
                                <div id="right">
                                    <button id="mas-completo">+</button>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <div class="comprar-ahora">
                        <button id="btn-comprar-ahora">
                            <h5>Comprar Ahora</h5>
                        </button>
                    </div>
                    <div class="add-to-car-completo">
                        <button class="añadir-al-carrito" id="1">
                            <img src="../img/carrito+.png" id="carritoplus" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="barra-opciones">
            <button  id="btn-descripcion" >
                Descripción
            </button>
            <button id="btn-ingredientes">
                Ingredientes
            </button>
            <button id="btn-instrucciones">
                Instrucciones de uso
            </button>
            <button id="btn-comentarios">
                Comentarios
            </button>
        </div>
        <div class="contenido">
            <strong style="font-size: 20px;">Descripción</strong><br>
            Bolsa de cafe Veracruz de 300 gramos.
        </div>
    </div>-->
</div>

<footer>
    <hr>
    &copy; 2023 - The Drop Coffee - <a href="">Privacy</a>
</footer>

</body>
<script type="text/javascript" src="../../js/Nav-Menu.js"></script>
</html>
<script src="js/Cafe11.js"></script>    
<script src="../script.js"></script>
