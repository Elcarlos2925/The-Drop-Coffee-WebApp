const productos=[
    {
        "id": "3",
        "titulo": "Set de 2 Tazas Modernas I Love Coffee de 16 oz",
        "imagen": "./img/C1.png",
        "imagen1": "./img/3-1.png",
        "imagen2": "./img/3-2.png",
        "imagen3": "./img/3-3.png",
        "precio": 180.00,
        "Descripción": `<h2>Descripción</h2>
        <br>Celebra tu amor por el café con nuestro elegante Set de 2 Tazas Modernas I Love Coffee de 16 oz (onzas). Este conjunto de tazas es la elección perfecta para los amantes del café que desean expresar su pasión de una manera moderna y con estilo.
        <br>
        <br>El set incluye dos tazas de plástico resistente, una en un atractivo tono de café oscuro y la otra en un cálido ocre profundo. En el frente de cada taza, encontrarás la expresión I Love Coffee, donde la palabra Love se sustituye por un encantador corazón compuesto de granos de café. Esta representación única y artística del amor por el café añade un toque de sofisticación a tu experiencia cafetera.
        <br>
        <br>En la parte trasera de cada taza, nuestro distintivo logo de la empresa se encuentra discretamente ubicado, reafirmando nuestro compromiso con la calidad y la pasión por el café.
        <br>
        <br>Estas tazas modernas, fabricadas en plástico resistente, son ideales para llevar tu café favorito a donde quiera que vayas. Con una capacidad de 16 oz, son perfectas para aquellos momentos en los que necesitas una buena dosis de cafeína.
        `,
        "Características": `<h2>Características<h2>
        <br>Cantidad: 2 tazas
        <br>Tamaño (Gramaje, Volumen): 16 oz
        <br>Acabado: Liso
        <br>Color: Café y ocre obscuros
        <br>Es industrial: No
        <br>Es portátil: Sí
        <br>Género: Unisex
        <br>Material: Plástico resistente
        <br>Medida de altura: 115.26 mm
        <br>Medida de ancho: 125.13 mm
        <br>Medida de peso: 0.380 kg
        <br>Medida de profundidad: 90.26 mm
        <br>Requiere ensamblaje: No
        <br>Uso recomendado: Comedor
        <br>Forma: Cilíndrico
        `,
        "Instrucciones de uso": `<h2>Instrucciones<h2>
        <br>Estas instrucciones te ayudarán a mantener tus tazas en óptimas condiciones y prolongar su vida útil. También garantizarán que su uso sea seguro y efectivo.
        
        <br><h2>Lavado inicial<h2>
        <br>Lava las tazas antes de usarlas por primera vez con agua tibia y jabón suave. Enjuaga bien y sécalas completamente.
        
        <br><h2>Lavado regular<h2>
        <br>Lava las tazas después de cada uso con agua tibia y jabón suave. Evita el uso de productos de limpieza abrasivos, ya que pueden rayar la superficie.
        
        <br><h2>Cuidado con bebidas calientes<h2>
        <br>Ten en cuenta que las bebidas calientes pueden hacer que las tazas estén calientes al tacto. Utiliza la asa o un soporte para evitar quemaduras.
        `
    }
]

const contenedorProductos = document.querySelector("#contenedor-producto-vista");
const numerito = document.querySelector("#numerito");
let botonesAgregar = document.querySelectorAll(".añadir-al-carrito");

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
                            <button id="btn-comprar-ahora">
                                <h5>Comprar Ahora</h5>
                            </button>
                        </div>
                        <div class="add-to-car-completo">
                            <button class="añadir-al-carrito">
                                <img src="../../img/carrito+.png" id="carritoplus" />
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
                <p>${producto.Descripción}</p>
            </div>
    </div>
        `;
        contenedorProductos.append(div);
    })
    actualizarNumerito();
}
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
actualizarNumerito();
CargarInformacion();