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
        "Características": `<h2>Características</h2>
        <br><strong>Cantidad:</strong> 2 piezas
        <br><strong>Tamaño (Gramaje, Volumen):</strong> 14 oz
        <br><strong>Acabado:</strong> Liso
        <br><strong>Color: </strong>Amarillo y blanco
        <br><strong>Es industrial:</strong> No
        <br><strong>Es portátil:</strong> Sí
        <br><strong>Género:</strong> Unisex
        <br><strong>Material:</strong> Acero inoxidable
        <br><strong>Medida de altura:</strong> 115.16 mm
        <br><strong>Medida de ancho:</strong> 126.28 mm
        <br><strong>Medida de peso:</strong> 0.240 kg
        <br><strong>Medida de profundidad:</strong> 101.71 mm
        <br><strong>Requiere ensamblaje:</strong> No
        <br><strong>Uso recomendado:</strong> Comedor
        <br><strong>Forma:</strong> Cilíndrico
        `,
        "Instrucciones_de_uso": `<h2>Instrucciones de uso</h2>
        <br><br>Estas instrucciones te ayudarán a mantener tus tazas en óptimas condiciones y prolongar su vida útil. También garantizarán que su uso sea seguro y efectivo.
        <br>
        <br><strong>Lavado inicial</strong>
        <br>Lava las tazas antes de usarlas por primera vez con agua tibia y jabón suave. Enjuaga bien y sécalas completamente.
        <br>
        <br<strong>>Lavado regular</strong>
        <br>Lava las tazas después de cada uso con agua tibia y jabón suave. Evita el uso de productos de limpieza abrasivos, ya que pueden rayar la superficie.
        <br>
        <br><strong>Cuidado con bebidas calientes</strong>
        <br>Ten en cuenta que las bebidas calientes pueden hacer que las tazas estén calientes al tacto. Utiliza la asa o un soporte para evitar quemaduras.
        `,
        "Comentarios": `<h2>Comentarios</h2>
        <h2 style="font-size: 20px;">Comentarios</h2><br>
            <div class="btn-calificacion-comentarios">
                <br><strong class="nombre-usuario">Andrea Rivas García </strong><!--?aqui le cambias el nombre-->
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
            Las tazas que compre son encantadoras, cada una tiene su toque único y de muy buena calidad. 
            <!--?Aqui pones el mensaje ahi si opupas espacios pues con <br>-->

            <br>
            <br>
            <div class="btn-calificacion-comentarios">
                <br><strong class="nombre-usuario">Valeria López Soto</strong><!--?aqui le cambias el nombre-->
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
            Me encanta la variedad de diseños en las tazas y el precio esta muy bien por la calidad que tienen las tazas.

            <br>
            <br>
            <div class="btn-calificacion-comentarios">
                <br><strong class="nombre-usuario">Juan Pablo Reyes Ramírez</strong><!--?aqui le cambias el nombre-->
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
            La calidad de las tazas es impresionante, se nota que están hechas para durar.

            <br>
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
                            <input type="checkbox" id="like">
                            <label for="like" class="lbl-like"><i class="fas fa-heart"></i></label>
                            
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