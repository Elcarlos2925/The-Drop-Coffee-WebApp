const productos=[
    {
        "id": "5",
        "titulo": "Set de 2 Tazas Aisladas de 14 oz",
        "imagen": "./img/C1.png",
        "imagen1": "./img/5-1.png",
        "imagen2": "./img/5-2.png",
        "imagen3": "./img/5-3.png",
        "precio": 299.00,
        "Descripción": `<h2>Descripción</h2>
        <br>Experimenta la fusión perfecta de estilo y funcionalidad con nuestro Set de 2 Tazas Aisladas de 14 oz (onzas). Estas dos tazas de acero inoxidable no solo mantendrán tu café caliente, sino que también te brindarán una experiencia de café excepcional.
        <br>
        <br>Este set incluye dos tazas aisladas, una en un vibrante tono amarillo y la otra en un elegante blanco. Cada taza es una obra maestra de diseño, con el logo distintivo de nuestra empresa en la parte frontal, lo que denota calidad y pasión por el café.
        <br>
        <br>En la parte trasera de cada taza, encontrarás de manera vertical el logo de la empresa, reforzando nuestro compromiso con la excelencia. En el centro de cada taza, una figura única representa dos granos de café, rindiendo homenaje a la esencia misma de lo que amamos: el café de calidad.
        <br>
        <br>Estas tazas aisladas son ideales para disfrutar de tu café caliente en cualquier lugar. Con una capacidad de 14 oz, son lo suficientemente espaciosas para tu bebida favorita, y su construcción de acero inoxidable de alta calidad asegura que la temperatura de tu café se mantenga constante por más tiempo.
        `,
        "Características": `<h2>Características<h2>
        <br>Cantidad: 2 piezas
        <br>Tamaño (Gramaje, Volumen): 14 oz
        <br>Acabado: Liso
        <br>Color: Amarillo y blanco
        <br>Es industrial: No
        <br>Es portátil: Sí
        <br>Género: Unisex
        <br>Material: Acero inoxidable
        <br>Medida de altura: 115.16 mm
        <br>Medida de ancho: 126.28 mm
        <br>Medida de peso: 0.240 kg
        <br>Medida de profundidad: 101.71 mm
        <br>Requiere ensamblaje: No
        <br>Uso recomendado: Comedor
        <br>Forma: Cilíndrico
        `,
        "Instrucciones de uso": `<h2>Instrucciones<h2>
        <br>Estas instrucciones te ayudarán a mantener tus tazas en óptimas condiciones y prolongar su vida útil. También garantizarán que su uso sea seguro y efectivo.

        <br><h2>Lavado inicial<h2>
        <br>Lava las tazas antes de usarlas por primera vez con agua tibia y jabón suave. Enjuaga bien y sécalas completamente.

        <br<h2>>Lavado regular<h2>
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