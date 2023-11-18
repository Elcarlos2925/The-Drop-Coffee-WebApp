const productos=[
    {
        "id": "1",
        "titulo": "Café de Veracruz 300g",
        "imagen": "./img/C1.png",
        "imagen1": "./img/CV1.png",
        "imagen2": "./img/CV2.png",
        "imagen3": "./img/CV3.png",
        "precio": 250.00,
        "Descripción": `<h2>Descripción</h2>
        <br>
        <br>Descubre la rica tradición cafetera de Veracruz en cada taza con nuestro Café de Veracruz, una joya de la región tostada a la perfección. Este café de especialidad veracruzano está elaborado con gran pasión y cuidado. Nuestra selección de granos 100% arábigo brinda una experiencia única, con un tostado medio que resalta sus sabores naturales.
        <br>
        <br>Este café es más que una bebida, es una conexión con la tierra, la cultura y la pasión que Veracruz pone en cada grano. Aprovecha la oportunidad de saborear una taza única de México en cualquier momento del día. Adquiere tu bolsa de Café de Veracruz hoy y lleva a tu hogar el auténtico sabor de esta tierra mágica!
        <br>
        <br>Contenido neto: 300 g (gramos)
        <br>Intensidad: 6
        <br>Tostado: Medio
        <br>Aroma: Intenso
        <br>Intensidad: Ligero
        <br>Notas: Afrutadas
        <br>Molienda: Media
        `,
        "Ingredientes": `<h2>Ingredientes</h2>
        <br>
        <br>Café de especialidad veracruzano tostado medio y molido 100% arábigo.
        `,
        "Instrucciones_de_uso": `
        <h2>Instrucciones</h2>
        <br>
        <br> Almacenamiento. Guarda tu bolsa de café en un lugar fresco, oscuro y seco. Evita la exposición a la luz directa y al aire, ya que estos factores pueden afectar la frescura y calidad del café.
        <br> 
        <br> Proporciones. Asegúrate de utilizar la cantidad adecuada de café por cada taza. Las recomendaciones varían según el método de preparación, pero generalmente se usa una cucharada de café por cada 180 ml de agua como punto de partida. Ajusta la cantidad según tu preferencia personal.
        <br> 
        <br> 
        <br> Preparación
        <br> Paso 1. Añade una cucharadita de café en tu taza. Si prefieres endulzarlo, puedes agregar azúcar al gusto.
        <br> Paso 2. Vierte cuidadosamente agua caliente en la taza, dejando un pequeño espacio en la parte superior. Remueve adecuadamente para asegurarte de que tanto el café como el azúcar se disuelva completamente (esto debería tomar aproximadamente 10-15 segundos).
        <br> Paso 3. Si te gusta tu café con leche, este es el momento ideal para agregarla.
        <br> Paso 4. Prueba tu café. ¿No tiene la fuerza deseada? Añade más gránulos de café la próxima vez. ¿Demasiado fuerte? Reduce la cantidad de café y añade un poco más de leche. Ajusta según sean tus preferencias.
       `,
       "Comentarios": `<h2>Comentarios</h2>`
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
                <button id="btn-ingredientes" onclick="mostrarIngredientes()">
                    Ingredientes
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


function mostrarIngredientes() {
    document.querySelector("#contenido"). innerHTML = "";
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.innerHTML = `
            ${producto.Ingredientes}
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