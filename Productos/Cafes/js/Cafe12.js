const productos=[
    {
        "id": "12",
        "titulo": "Café especial Descafeinado 300g",
        "imagen": "./img/C12.png",
        "imagen1": "./img/CED1.png",
        "imagen2": "./img/CED2.png",
        "imagen3": "./img/CED3.png",
        "precio": 250.00,
        "Descripción": `<h2>Descripción</h2>
        <br>
        <br>Descubre el apasionante mundo del café sin cafeína con nuestra versión descafeinada del Café Especial The Drop Coffee. Este café es el corazón de nuestra casa, una creación única que te ofrece una experiencia de café excepcional sin la cafeína.
        <br>
        <br>Cada taza de Café Especial The Drop Coffee Descafeinado es una aventura de sabores, con detalles únicos que te transportan a lugares lejanos. Hemos seleccionado los granos más finos y excepcionales para brindarte un sabor verdaderamente distintivo, incluso sin cafeína.
        <br>
        <br>Nuestro café descafeinado está tostado a la perfección para resaltar su carácter especial, ofreciendo un equilibrio entre intensidad y suavidad que te encantará en cada sorbo. Es más que una bebida, es una expresión de nuestra pasión por el café de calidad, ahora sin cafeína.
        <br>
        <br>Disfruta de una taza de "The Drop Coffee" Descafeinado en cualquier momento del día y descubre por qué es un verdadero café especial de la casa, sin la cafeína.
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
        <br>Café descafeinado de especialidad The Drop Coffee tostado medio y molido 100% arábigo.
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
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}actualizarNumerito();

CargarInformacion();