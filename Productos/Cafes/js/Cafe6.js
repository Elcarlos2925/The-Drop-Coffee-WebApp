const productos=[
   {
        "id": "6",
        "titulo": "Café mezclas mexicanas 300g",
        "imagen": "./img/C9.png",
        "imagen1": "./img/CMM1.png",
        "imagen2": "./img/CMM2.png",
        "imagen3": "./img/CMM3.png",
        "precio": 250.00,
        "Descripción": `
        <h2>Descripción</h2>
        <br>
        <br>Embárcate en un emocionante viaje a través de nuestro Café de Mezclas Mexicanas, una fusión única que proviene de las ricas tierras de Veracruz, Chiapas, Puebla y Oaxaca . Este café especial es el resultado de la pasión y dedicación de los amantes del café en estas cuatro hermosas regiones. Hemos seleccionado granos 100% arábica de estos lugares para brindar una experiencia excepcional, con un tostado medio que realza sus sabores naturales.
        <br>
        <br>Este café te sumerge en la diversidad de las tierras y las culturas de Veracruz, Chiapas, Puebla y Oaxaca. Aprovecha la oportunidad de saborear una taza única de México que combina lo mejor de estas regiones en cualquier momento del día. Obtén tu bolsa de Café de Mezclas Mexicanas hoy y lleva a tu hogar el auténtico sabor de estas tierras ricas en tradición.
        <br>
        <br>Contenido neto: 300 g (gramos)
        <br>Intensidad: 6
        <br>Tostado: Medio
        <br>Aroma: Intenso
        <br>Intensidad: Ligera
        <br>Notas: Afrutadas
        <br>Molienda: Media
        `, 
        "Ingredientes": `Ingredientes
        <br>Café de especialidad mezclas mexicanas tostado medio y molido 100% arábigo. 
        `,
        "Instrucciones de uso": `
        Instrucciones
        <br>
        <br>Almacenamiento. Guarda tu bolsa de café en un lugar fresco, oscuro y seco. Evita la exposición a la luz directa y al aire, ya que estos factores pueden afectar la frescura y calidad del café.
        <br>
        <br>Proporciones. Asegúrate de utilizar la cantidad adecuada de café por cada taza. Las recomendaciones varían según el método de preparación, pero generalmente se usa una cucharada de café por cada 180 ml de agua como punto de partida. Ajusta la cantidad según tu preferencia personal.
        <br>
        <br>
        <br>Preparación
        <br>Paso 1. Añade una cucharadita de café en tu taza. Si prefieres endulzarlo, puedes agregar azúcar al gusto.
        <br>Paso 2. Vierte cuidadosamente agua caliente en la taza, dejando un pequeño espacio en la parte superior. Remueve adecuadamente para asegurarte de que tanto el café como el azúcar se disuelva completamente (esto debería tomar aproximadamente 10-15 segundos).
        <br>Paso 3. Si te gusta tu café con leche, este es el momento ideal para agregarla.
        <br>Paso 4. Prueba tu café. ¿No tiene la fuerza deseada? Añade más gránulos de café la próxima vez. ¿Demasiado fuerte? Reduce la cantidad de café y añade un poco más de leche. Ajusta según sean tus preferencias.
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
}

CargarInformacion();