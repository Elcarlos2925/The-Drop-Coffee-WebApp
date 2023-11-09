const productos=[
    {
        "id": "16",
        "titulo": "Sudadera Blanca especial The Drop Coffee",
        "imagen": "./img/C1.png",
        "imagen1": "./img/16-1.png",
        "imagen2": "./img/16-2.png",
        "imagen3": "./img/16-3.png",
        "precio": 350.00,
        "Descripción": `<h2>Descripción</h2>
        <br>La Sudadera Blanca Especial The Drop Coffee es mucho más que una prenda, es una declaración de estilo y pasión por el café. Esta sudadera de un hermoso tono blanco te permite llevar contigo la esencia de The Drop Coffee en cada paso que das.
        <br>
        <br>Con el logo distintivo de la empresa en la parte frontal, esta sudadera es una muestra de tu afinidad con una marca que valora la excelencia en el café. El diseño sencillo y elegante se combina perfectamente con el cálido tono ocre de la prenda, creando una estética que se adapta a cualquier ocasión.
        <br>
        <br>Ya sea que la uses para mantenerte cálido en una tarde fresca, como parte de tu atuendo diario o como un símbolo de tu amor por el café, esta sudadera es cómoda y versátil. Está confeccionada con materiales de alta calidad que garantizan su durabilidad y comodidad.
        `,
        "Características": `<h2>Características<h2>
        <br>Cantidad: 1 pieza
        <br>Tamaño (Talla): A su elección (CH, M, G, EG)
        <br>Acabado: Liso
        <br>Color: Blanco
        <br>Es industrial: No
        <br>Es portátil: Sí
        <br>Género: Unisex
        <br>Material: 100% algodón
        <br>Medida de altura: Varía según la talla seleccionada
        <br>Medida de ancho: Varía según la talla seleccionada
        <br>Medida de peso: Peso ligero y cómodo
        <br>Medida de profundidad: Estándar para una sudadera
        <br>Requiere ensamblaje: No
        <br>Uso recomendado: Uso diario, ocasiones casuales
        <br>Forma: Corte clásico, diseño tradicional
        `,
        "Instrucciones de uso": `<h2>Instrucciones de uso<h2>
        <br><h2>Lavado inicial<h2>
        <br>Antes de usar tu sudadera por primera vez, te recomendamos lavarla a máquina o a mano con agua fría y un detergente suave. Enjuaga bien y sécala al aire libre.
  
        <br><h2>Lavado regular<h2>
        <br>Lava tu sudadera después de cada uso para mantenerla fresca y limpia. Utiliza agua fría o tibia y un detergente suave. Evita el uso de blanqueadores o productos de limpieza abrasivos que puedan dañar los colores y la tela.
  
        <br><h2>Cuidado con la temperatura<h2>
        <br>Recuerda que las altas temperaturas en la lavadora o secadora pueden acortar la vida útil de tu sudadera y afectar los colores. Te recomendamos lavarla con agua fría y secarla al aire.
  
        <br><h2>Cuidado con los estampados<h2>
        <br>Evita planchar directamente sobre los estampados. Voltea la sudadera al revés y plancha suavemente si es necesario.
  
        <br>Siguiendo estos consejos de cuidado, podrás mantener tu sudadera en óptimas condiciones y prolongar su vida útil. ¡Disfruta de tu sudadera The Drop Coffee con estilo y comodidad!
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