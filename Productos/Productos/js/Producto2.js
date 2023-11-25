const productos=[
    {
        "id": "14",
        "titulo": "Juego de 3 Tazas Coffee Cafe de 14 oz",
        "imagen": "./img/P2.png",
        "imagen1": "./img/2-1.png",
        "imagen2": "./img/2-2.png",
        "imagen3": "./img/2-3.png",
        "precio": 299.00,
        "Descripción": `<h2>Descripción</h2>
        <br>Añade un toque de café a tu día con nuestro elegante Juego de 3 Tazas Coffee Cafe de 14 oz (onzas). Este juego de tazas es una declaración de estilo para los amantes del café que aprecian tanto la estética como el sabor de su bebida favorita.
        <br>
        <br>Este set incluye tres tazas de un hermoso tono café, perfectamente diseñadas para encajar en tu rutina diaria. En el frente de cada taza, encontrarás la palabra "Coffee Cafe" acompañada de intrincados granos de café, lo que evoca la esencia misma de la pasión por el café. En la parte trasera de cada taza, nuestro distintivo logo "The Drop Coffee" se encuentra rodeado de adorables dibujos de granos de café.
        <br>
        <br>Cada taza tiene una capacidad de 14 oz, lo que las hace ideales para tu café matutino, una pausa para el café en el trabajo o una relajante tarde de café en casa. Además, su construcción de alta calidad garantiza su durabilidad y resistencia.
        <br>
        <br>Agrega un toque de elegancia a tus momentos de café con este conjunto de tazas que seguramente se convertirán en tus favoritas.
        `,
        "Características": `<h2>Características</h2>
        <br><strong>Cantidad:</strong> 3 tazas
        <br><strong>Tamaño (Gramaje, Volumen):</strong> 14 oz
        <br><strong>Acabado:</strong> Liso
        <br><strong>Color:</strong> Café
        <br><strong>Es industrial:</strong> No
        <br><strong>Es portátil:</strong> Sí
        <br><strong>Género:</strong> Unisex
        <br><strong>Material:</strong> Cerámica
        <br><strong>Medida de altura:</strong> 113.26 mm
        <br><strong>Medida de ancho:</strong> 121.13 mm
        <br><strong>Medida de peso:</strong> 0.362 kg
        <br><strong>Medida de profundidad:</strong> 88.26 mm
        <br><strong>Requiere ensamblaje:</strong> No
        <br><strong>Uso recomendado:</strong> Comedor
        <br><strong>Forma:</strong> Cilíndrico
        `,
        "Instrucciones_de_uso": `<h2>Instrucciones de uso</h2>
        <br>Estas instrucciones te ayudarán a mantener tus tazas de cerámica en óptimas condiciones y prolongar su vida útil. También garantizarán que su uso sea seguro y efectivo.
        <br>
        <br><strong>Lavado inicial</strong>
        <br>Lava las tazas de cerámica antes de usarlas por primera vez con agua tibia y jabón suave. Enjuaga bien y sécalas completamente.
        <br>
        <br><strong>Lavado regular</strong>
        <br>Lava las tazas después de cada uso con agua tibia y jabón suave. Evita el uso de productos de limpieza abrasivos, ya que pueden rayar la superficie.
        <br>
        <br><strong>Cuidado con bebidas calientes</strong>
        <br>Ten en cuenta que las bebidas calientes pueden hacer que las tazas estén calientes al tacto. Utiliza la asa o un soporte para evitar quemaduras.
        <br>
        <br><strong>Manejo con cuidado</strong>
        <br>Trata las tazas de cerámica con cuidado para evitar golpes que puedan romperlas o dañarlas.
        `,
        "Comentarios": `<h2>Comentarios</h2>
        <br>
        <div class="btn-calificacion-comentarios">
            <br><strong class="nombre-usuario">Nicolás Ruiz Martell</strong><!--?aqui le cambias el nombre-->
            <button id="estrellas"><!--?segun el numero de estrellas ponle estrellas a las hablilitadas y estrellas-deshabilitadas pues a las que no en el id-->
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
            <button id="estrellas">
                <i class="fas fa-coffee"></i>
            </button>
        </div>
        La taza era para un regalo para mi novia y le encanto mucho!!
        <br>
<br>
<div class="btn-calificacion-comentarios">
<br><strong class="nombre-usuario">Gabriel Martínez Herrera</strong><!--?aqui le cambias el nombre-->
<button id="estrellas"><!--?segun el numero de estrellas ponle estrellas a las hablilitadas y estrellas-deshabilitadas pues a las que no en el id-->
    <i class="fas fa-coffee"></i>
</button>
<button id="estrellas">
    <i class="fas fa-coffee"></i>
</button>
<button id="estrellas-deshabilitadas">
    <i class="fas fa-coffee"></i>
</button>
<button id="estrellas-deshabilitadas">
    <i class="fas fa-coffee"></i>
</button>
<button id="estrellas-deshabilitadas">
    <i class="fas fa-coffee"></i>
</button>
</div>
El juego de tazas que compré es fantástico, cada una tiene un diseño único y llamativo. ¡Me encantan!

<br>
<br>
<div class="btn-calificacion-comentarios">
<br><strong class="nombre-usuario">Ana Rodríguez García</strong><!--?aqui le cambias el nombre-->
<button id="estrellas"><!--?segun el numero de estrellas ponle estrellas a las hablilitadas y estrellas-deshabilitadas pues a las que no en el id-->
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
<button id="estrellas">
    <i class="fas fa-coffee"></i>
</button>
</div>
¡Las tazas son hermosas! La entrega fue rápida y el empaque muy seguro. Muy satisfecha con mi compra.
`
    }
]

const contenedorProductos = document.querySelector("#contenedor-producto-vista");
const numerito = document.querySelector("#numerito");
let botonesAgregar = document.querySelectorAll(".añadir-al-carrito");
let menos = document.querySelectorAll(".menos-completo");
let mas = document.querySelectorAll(".mas-completo");

function CargarInformacion(){

    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("contenedor-producto-vista");
        div.innerHTML = `
        <div class="fondo-contenedor-producto" id="fondo-contenedor-producto">
            <div class="carrusel-datos">
            
                <div class="carrusel-btn">
                    <button class="anterior-producto">&#10094; </button>
                    <div class="carrusel-producto-completo">
                        <div class="imagen-productos-completo">
                            <img src="${producto.imagen1}">
                        </div>
                        <div class="imagen-productos-completo">
                            <img src="${producto.imagen2}">
                        </div>
                        <div class="imagen-productos-completo">
                            <img src="${producto.imagen3}">
                        </div>
                    </div>
                    <button class="siguiente-producto"> &#10095;</button>
                </div>
                
                <div class="contenedor-datos-producto">
                    
                    <div class="titulo">
                        ${producto.titulo}
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
                            <input type="checkbox" id="like">
                            <label for="like" class="lbl-like"><a href="../../Registro/index.php"><i class="fas fa-heart"></i></a></label>
                            
                            <input type="checkbox" id="share">
                            <label for="share" class="lbl-share"><i class="fas fa-link"></i></label>
                        </div>
                    </div>
                    <div class="precio-mxn-completo">
                        <div class="precio-completo">
                            <h5 class="signo-dollar">
                                $
                            </h5>
                            <h5>
                                ${producto.precio}
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
                            <a href="../../Registro/index.php"><button  id="btn-comprar-ahora">
                                <h5>Comprar Ahora</h5>
                            </button></a>
                        </div>
                        <div class="add-to-car-completo">
                            <a href="../../Registro/index.php"><button  class="añadir-al-carrito" id="${producto.id}">

                                <img src="../../img/carrito+.png" id="carritoplus" />
                            </button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="barra-opciones">
                <button  id="btn-descripcion" onclick="mostrarDescripcion()">
                    Descripción
                </button>
                <button id="btn-ingredientes" onclick="mostrarCaracteristicas()">
                    Características
                </button>
                <button id="btn-instrucciones" onclick="mostrarInstrucciones()">
                    Instrucciones de uso
                </button>
                <button id="btn-comentarios" onclick="mostrarComentarios()">
                    Comentarios
                </button>
            </div>
            <div class="contenido" id="contenido">
                <p>${producto.Descripción}</p>
            </div>
    </div>
        `;
        contenedorProductos.append(div);
    })
    
}
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);


CargarInformacion();

function mostrarDescripcion() {

    document.querySelector("#contenido"). innerHTML = "";
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.innerHTML = `
            ${producto.Descripción}
            <style>
                #btn-descripcion{
                    color: #342009;
                    background-color: #fff;
                }
                
                #btn-ingredientes,
                #btn-instrucciones,
                #btn-comentarios,
                {
                    color: #fff;
                    background-color: #342009;
                }
            </style>
        `;
        document.querySelector("#contenido").append(div);
    })
  }


function mostrarCaracteristicas() {
    document.querySelector("#contenido"). innerHTML = "";
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.innerHTML = `
            ${producto.Características}
            <style>
                #btn-ingredientes{
                    color: #342009;
                    background-color: #fff;
                }
                
                #btn-instrucciones,
                #btn-comentarios,
                #btn-descripcion
                {
                    color: #fff;
                    background-color: #342009;
                }
            </style>
        `;
        document.querySelector("#contenido").append(div);
    })
  }

  function mostrarInstrucciones() {
    document.querySelector("#contenido"). innerHTML = "";
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.innerHTML = `
            ${producto.Instrucciones_de_uso}
            <style>
                #btn-instrucciones{
                    color: #342009;
                    background-color: #fff;
                }
                
                #btn-ingredientes,
                #btn-comentarios,
                #btn-descripcion
                {
                    color: #fff;
                    background-color: #342009;
                }
            </style>
        `;
        document.querySelector("#contenido").append(div);
    })
  }

    function mostrarComentarios() {
    document.querySelector("#contenido"). innerHTML = "";
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.innerHTML = `
            ${producto.Comentarios}
            <style>
                #btn-comentarios{
                    color: #342009;
                    background-color: #fff;
                }
                
                #btn-ingredientes,
                #btn-instrucciones,
                #btn-descripcion
                {
                    color: #fff;
                    background-color: #342009;
                }
            </style>
        `;
        document.querySelector("#contenido").append(div);
    })
  }


                                

