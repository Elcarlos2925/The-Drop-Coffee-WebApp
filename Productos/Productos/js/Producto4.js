const productos=[
    {
        "id": "4",
        "titulo": "Termo Especial The Drop Coffee de 24 oz",
        "imagen": "./img/C1.png",
        "imagen1": "./img/4-1.png",
        "imagen2": "./img/4-2.png",
        "imagen3": "./img/4-3.png",
        "precio": 250.00,
        "Descripción": `<h2>Descripción</h2>
        <br>Mantén tu café caliente y listo para disfrutar en cualquier momento con nuestro exclusivo Termo Especial The Drop Coffee de 24 oz (onzas). Este termo de acero inoxidable es una elección elegante y práctica para los amantes del café que valoran la calidad y el estilo.
        <br>
        <br>Nuestro termo especial cuenta con una capacidad de 24 onzas, lo que significa que puedes llevar contigo una abundante cantidad de tu café preferido para disfrutar en el camino. Su construcción de acero inoxidable garantiza la retención de la temperatura, manteniendo tus bebidas calientes durante horas, lo que lo convierte en el compañero perfecto para tus desplazamientos diarios o tus aventuras al aire libre.
        <br>
        <br>En el frente del termo, encontrarás con orgullo nuestro logo distintivo, un sello de calidad y pasión por el café que representa la esencia de The Drop Coffee. En la parte trasera, el nombre de nuestra empresa se encuentra dispuesto de manera vertical, agregando un toque de elegancia y estilo a este termo excepcional.
        <br>
        <br>Este termo no solo es perfecto para llevar tu café, sino que también es adecuado para una variedad de bebidas, desde té hasta agua. Su tapa a prueba de derrames y su diseño ergonómico hacen que sea fácil de llevar contigo a donde sea que vayas.
        `,
        "Características": `<h2>Características<h2>
        <br>Cantidad: 1 pieza
        <br>Tamaño (Gramaje, Volumen): 24 oz
        <br>Acabado: Liso
        <br>Color: Café
        <br>Es industrial: No
        <br>Es portátil: Sí
        <br>Género: Unisex
        <br>Material: Acero inoxidable
        <br>Medida de altura: 120.30 mm
        <br>Medida de ancho: 132.30 mm
        <br>Medida de peso: 0.380 kg
        <br>Medida de profundidad: 108.41 mm
        <br>Requiere ensamblaje: No
        <br>Uso recomendado: Comedor
        <br>Forma: Cilíndrico
        `,
        "Instrucciones de uso": `<h2>Instrucciones<h2>
        <br>Estas instrucciones te ayudarán a mantener tu termo en óptimas condiciones y prolongar su vida útil. También garantizarán que su uso sea seguro y efectivo.
        
        <br><h2>Lavado inicial<h2>
        <br>Lava el termo antes de usarlo por primera vez con agua tibia y jabón suave. Enjuaga bien y sécalo completamente.
        
        <br><h2>Lavado regular<h2>
        <br>Lava el termo antes de usarlo por primera vez con agua tibia y jabón suave. Enjuaga bien y sécalo completamente.
        
        <br><h2>Cuidado con bebidas calientes<h2>
        <br>Ten en cuenta que las bebidas calientes pueden hacer que el termo esté caliente al tacto. Utiliza la asa o un soporte para evitar quemaduras.
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