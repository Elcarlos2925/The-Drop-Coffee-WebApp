const productos=[
    {
        "id": "19",
        "titulo": "Vaso especial The Drop Coffee de 500ml",
        "imagen": "./img/P7.png", 
        "imagen1": "./img/7-1.png",
        "imagen2": "./img/7-2.png",
        "imagen3": "./img/7-3.png",
        "precio": 145.00,
        "Descripción": `<h2>Descripción</h2>
        <br>El Vaso Especial The Drop Coffee de 500ml (mililitros) es la elección perfecta para aquellos que buscan una experiencia refrescante en cualquier lugar. Este vaso transparente de plástico resistente está especialmente diseñado para disfrutar de tus bebidas frías favoritas de The Drop Coffee con estilo y comodidad.
        <br>
        <br>Con una capacidad de 500 ml, este vaso es ideal para mantener tus bebidas frías, como café helado, frappés, batidos o cualquier otra creación refrescante. Su diseño transparente te permite apreciar la frescura de tu bebida y muestra que valoras la calidad de The Drop Coffee.
        <br>
        <br>Este vaso especial lleva el nombre de The Drop Coffee, una marca conocida por su pasión por el café de alta calidad. Llévalo contigo durante tus jornadas en la oficina, en la playa, o en cualquier lugar donde necesites una dosis de frescura y un toque de estilo.
        `,
        "Características": `<h2>Características</h2>
        <br><strong>Cantidad:</strong> 1 pieza
        <br><strong>Tamaño (Gramaje, Volumen):</strong> 500 ml
        <br><strong>Acabado:</strong> Liso
        <br><strong>Color:</strong> transparente
        <br><strong>Es industrial:</strong> No
        <br><strong>Es portátil:</strong>Si
        <br><strong>Género:</strong> Unisex
        <br><strong>Material: </strong>plástico resistente
        <br><strong>Medida de altura:</strong> 120.63 mm
        <br><strong>Medida de ancho:</strong> 136.72 mm
        <br><strong>Medida de peso:</strong> 0.136 kg
        <br><strong>Medida de profundidad:</strong> 107.64 mm
        <br><strong>Requiere ensamblaje:</strong> No
        <br><strong>Uso recomendado:</strong> Comedor
        <br><strong>Forma: </strong>Cilíndrico
        `,
        "Instrucciones_de_uso": `<h2>Instrucciones de uso</h2>
        <br>Estas instrucciones te ayudarán a mantener tu termo en óptimas condiciones y prolongar su vida útil. También garantizarán que su uso sea seguro y efectivo.
        <br>
        <br><strong>Lavado inicial</strong>
        <br>Lava el termo antes de usarlo por primera vez con agua tibia y jabón suave. Enjuágalo bien y sécalo completamente.
        <br>
        <br><strong>Lavado regular</strong>
        <br>Lava el termo después de cada uso con agua tibia y jabón suave. Evita el uso de productos de limpieza abrasivos, ya que pueden rayar la superficie.
        <br>
        <br><strong>Cuidado con bebidas calientes</strong>
        <br>Ten en cuenta que las bebidas calientes pueden hacer que la taza esté caliente al tacto. Utiliza la asa o un soporte para evitar quemaduras.
        `,
        "Comentarios": `<h2>Comentarios</h2>
        <br>
<div class="btn-calificacion-comentarios">
    <br><strong class="nombre-usuario">Isabella Torres Muñoz</strong><!--?aqui le cambias el nombre-->
    <button id="estrellas"><!--?segun el numero de estrellas ponle estrellas a las hablilitadas y estrellas-deshabilitadas pues a las que no en el id-->
        <i class="fas fa-coffee"></i>
    </button>
    <button id="estrellas">
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
</div>
Los vasos son ideales para mis bebidas preferidas, y el tamaño es perfecto. ¡Muy contenta con mi compra!

<br>
<br>
<div class="btn-calificacion-comentarios">
    <br><strong class="nombre-usuario">Martín López Soto</strong><!--?aqui le cambias el nombre-->
    <button id="estrellas"><!--?segun el numero de estrellas ponle estrellas a las hablilitadas y estrellas-deshabilitadas pues a las que no en el id-->
        <i class="fas fa-coffee"></i>
    </button>
    <button id="estrellas">
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
</div>
Los vasos son geniales, pero esperaba una gama más amplia de colores. Aún así, cumplen su función perfectamente.
<br>
<br>
<div class="btn-calificacion-comentarios">
    <br><strong class="nombre-usuario">Javier Rodríguez García</strong><!--?aqui le cambias el nombre-->
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
Buena calidad en los vasos, aunque considero que el precio podría ser más accesible. 
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
                                        2.6
                                    </h5>
                                </div>
                                <div class="btn-calificacion">
                                    <button id="estrellas">
                                        <i class="fas fa-coffee"></i>
                                    </button>
                                    <button id="estrellas">
                                        <i class="fas fa-coffee"></i>
                                    </button>
                                    <button id="estrellas-deshabilitada">
                                        <i class="fas fa-coffee"></i>
                                    </button>
                                    <button id="estrellas-deshabilitada">
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
                            <label for="share" class="lbl-share" onclick="copyLink()"><i class="fas fa-link"></i></label>
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
                                <a href="../../Direccion/index.php"><h5>Comprar Ahora</h5></a>
                            </button>
                        </div>
                        <div class="add-to-car-completo">
                            <button class="añadir-al-carrito" id="${producto.id}">
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


                                

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".añadir-al-carrito");
    console.log(botonesAgregar);

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let nuevoNumerito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1 ;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function copyLink() {
    var linkToCopy = window.location.href;

    var tempInput = document.createElement("input");
    tempInput.value = linkToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Para dispositivos móviles */

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("Enlace copiado: " + linkToCopy);
}


actualizarBotonesAgregar() ;

