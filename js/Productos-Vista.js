const productos=[
    {
        "id": "1",
        "titulo": "Café de Veracruz 300g",
        "imagen1": "./img/CV1.png",
        "imagen2": "./img/CV2.png",
        "imagen3": "./img/CV3.png",
        "precio": 250.00
    },

    {
        "id": "2",
        "titulo": "Café de Puebla 300g",
        "imagen": "./img/C3.png",
        "precio": 250.00
    },

    {
        "id": "3",
        "titulo": "Café de Chiapas 300g",
        "imagen": "./img/C5.png",
        "precio": 250.00
    },

    {
        "id": "4",
        "titulo": "Café de Oaxaca 300g",
        "imagen": "./img/C7.png",
        "precio": 250.00
    },

    {
        "id": "5",
        "titulo": "Café especial 300g",
        "imagen": "./img/C11.png",
        "precio": 250.00
    },

    {
        "id": "6",
        "titulo": "Café mezclas <br> mexicanas 300g",
        "imagen": "./img/C9.png",
        "precio": 250.00
    },

    {
        "id": "7",
        "titulo": "Café de Veracruz Descafeinado 300g",
        "imagen": "./img/C2.png",
        "precio": 250.00
    },

    {
        "id": "8",
        "titulo": "Café de Puebla Descafeinado 300g",
        "imagen": "./img/C4.png",
        "precio": 250.00
    },

    {
        "id": "9",
        "titulo": "Café de Chiapas Descafeinado 300g",
        "imagen": "./img/C6.png",
        "precio": 250.00
    },

    {
        "id": "10",
        "titulo": "Café de Oaxaca Descafeinado 300g",
        "imagen": "./img/C8.png",
        "precio": 250.00
    },

    {
        "id": "11",
        "titulo": "Café mezclas mexicanas Descafeinado 300g",
        "imagen": "./img/C10.png",
        "precio": 250.00
    },

    {
        "id": "12",
        "titulo": "Café especial <br> Descafeinado 300g",
        "imagen": "./img/C12.png",
        "precio": 250.00
    }
]

const contenedorProductos = document.querySelector("#fondo-contenedor-producto");
let botonesAgregar = document.querySelectorAll(".añadir-al-carrito");
const numerito = document.querySelector("#numerito");

const productoCargado = productos.find(producto => producto.id === productoId);

function actualizarVistaProductos(){
    linkVistaAmplia = document.querySelectorAll(".imagenCafe");
    console.log(linkVistaAmplia);

    linkVistaAmplia.forEach(boton => {
       boton.addEventListener("click", CargarInformacion);
    })
}

function CargarInformacion(e){
    contenedorProductos. innerHTML = "";
    if (productoCargado) {
        const div = document.createElement("div");
        div.classList.add("fondo-contenedor-producto");
        div.innerHTML = `
        <div class="carrusel-datos">

            <div class="carrusel-btn">
                <button class="anterior-producto">&#10094; </button>
                <div class="carrusel-producto-completo">
                    <div class="imagen-productos-completo">
                        <img src="../${productoCargado.imagen1}">
                    </div>
                    <div class="imagen-productos-completo">
                        <img src="../${productoCargado.imagen2}">
                    </div>
                    <div class="imagen-productos-completo">
                        <img src="../${productoCargado.imagen3}">
                    </div>
                </div>
                <button class="siguiente-producto"> &#10095;</button>
            </div>
            
            <div class="contenedor-datos-producto">
                
                <div class="titulo">
                    ${productoCargado.titulo}
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
                        <button class="añadir-al-carrito">
                            <img src="../img/carrito+.png" id="carritoplus" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
        contenedorProductos.append(div);
    }
}

actualizarVistaProductos();