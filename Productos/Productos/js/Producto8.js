const productos=[
    {
        "id": "8",
        "titulo": "Tarro especial The Drop Coffee de 450 ml",
        "imagen": "./img/C1.png",
        "imagen1": "./img/8-1.png",
        "imagen2": "./img/8-2.png",
        "imagen3": "./img/8-3.png",
        "precio": 120.00,
        "Descripción": `<h2>Descripción</h2>
        <br>El Tarro Especial The Drop Coffee de 450 ml (mililitros) es el compañero perfecto para disfrutar de tus bebidas frías favoritas con estilo y comodidad. Este tarro de vidrio en un atractivo tono café claro está diseñado para realzar tu experiencia de café y mantener tus bebidas frías en su punto óptimo.
        <br>
        <br>Con una capacidad de 450 ml, este tarro es ideal para bebidas frías, como café helado, batidos, cócteles de café, o cualquier otra creación refrescante. Su diseño de vidrio permite apreciar la presentación de tus bebidas y resalta la calidad de The Drop Coffee.
        <br>
        <br>Este tarro especial lleva el nombre de The Drop Coffee, una marca conocida por su pasión por el café de alta calidad. Úsalo en casa, en la oficina o en tus momentos de relajación, y muestra tu apoyo a una marca que valora el sabor y la excelencia.
        `,
        "Características": `<h2>Características<h2>
        <br>Cantidad: 1 pieza
        <br>Tamaño (Gramaje, Volumen): 450 ml
        <br>Acabado: Liso
        <br>Color: Café claro
        <br>Es industrial: No
        <br>Es portátil: Si
        <br>Género: Unisex
        <br>Material: vidrio
        <br>Medida de altura: 102.51 mm
        <br>Medida de ancho: 114.42 mm
        <br>Medida de peso: 0.156 kg
        <br>Medida de profundidad: 108.67 mm
        <br>Requiere ensamblaje: No
        <br>Uso recomendado: Comedor
        <br>Forma: Cilíndrico
        `,
        "Instrucciones de uso": `<h2>Instrucciones de uso<h2>
        <br>Estas instrucciones te ayudarán a mantener tu termo en óptimas condiciones y prolongar su vida útil. También garantizarán que su uso sea seguro y efectivo.
  
        <br><h2>Lavado inicial<h2>
        <br>Lava el tarro antes de usarlo por primera vez con agua tibia y jabón suave. Enjuágalo bien y sécalo completamente.
      
        <br><h2>Lavado regular<h2>
        <br>Lava el tarro después de cada uso con agua tibia y jabón suave. Evita el uso de productos de limpieza abrasivos, ya que pueden rayar la superficie.
      
        <br><h2>Cuidado con bebidas calientes<h2>
        <br>Ten en cuenta que las bebidas calientes pueden hacer que el tarro esté caliente al tacto. Utiliza la asa o un soporte para evitar quemaduras.
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