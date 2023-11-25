const productos=[
    {
        "id": "5",
        "titulo": "Café especial 300g",
        "imagen": "./img/C11.png",
        "imagen1": "./img/CE1.png",
        "imagen2": "./img/CE2.png",
        "imagen3": "./img/CE3.png",
        "precio": 250.00,
        "Descripción": `
        <h2>Descripción</h2>
        <br>
        <br>Sumérgete en el maravilloso mundo del café con nuestro Café Especial The Drop Coffee. Este café es el corazón de nuestra casa, una creación única que te ofrece una experiencia de café excepcional. Hemos seleccionado los granos más finos y excepcionales para brindarte un sabor verdaderamente distintivo.
        <br>
        <br>Cada taza de Café Especial The Drop Coffee es una aventura de sabores, con detalles únicos que te transportan a lugares lejanos. Nuestro café está tostado a la perfección para resaltar su carácter especial, ofreciendo un equilibrio entre intensidad y suavidad que te encantará en cada sorbo.
        <br>
        <br>Este café es más que una bebida, es una expresión de nuestra pasión por el café de calidad. Disfruta de una taza de The Drop Coffee en cualquier momento del día y descubre por qué es un verdadero café especial de la casa.
        <br>
        <br>Contenido neto: 300 g (gramos)
        <br>Intensidad: 6
        <br>Tostado: Medio
        <br>Aroma: Intenso
        <br>Intensidad: Ligera
        <br>Notas: Afrutadas
        <br>Molienda: Media
        `, 
        "Ingredientes": `
        <h2>Ingredientes</h2>
        <br>
        <br>Café de especialidad The Drop Coffee tostado medio y molido 100% arábigo. 
        `,
        "Instrucciones_de_uso": `
        <h2>Instrucciones de uso</h2>
        <br> Guarda tu bolsa de café en un lugar fresco, oscuro y seco. Evita la exposición a la luz directa y al aire, ya que estos factores pueden afectar la frescura y calidad del café.
        <br> 
        <br> 
        <br> 
        <h3>Preparación</h3>
        <br> 1. Mide la cantidad de café que vas a utilizar según las indicaciones de tu cafetera, generalmente se usa una cucharada colmada de café por cada 6 onzas de agua (177 ml), pero esto puede variar dependiendo de tu gusto.
        <br> 2. Llena el depósito de agua de la cafetera con la cantidad requerida y coloca el café en el filtro correspondiente.
        <br> 3. Enciende la cafetera y espera a que el café se prepare.
        <br> 4. Si prefieres endulzarlo, puedes agregar azúcar después de que esté listo, ya sea que lo agregues directamente en tu taza o en la cafetera.
        <br> 5. Si te gusta el café con leche, este es el momento ideal para añadirla en tu taza.
        <br> 6. Prueba tu café. ¿No tiene la fuerza deseada? Ajusta la cantidad de café utilizada la próxima vez. ¿Demasiado fuerte? Prueba con menos café o más agua en la cafetera. Ajusta según tus preferencias y disfruta.
       `,
       "Comentarios": `<h2>Comentarios</h2>
       <br>
       <div class="btn-calificacion-comentarios">
           <br><strong class="nombre-usuario">Elena Vargas Montenegro</strong><!--?aqui le cambias el nombre-->
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
       El café es una delicia, cada taza es un momento de placer aromático que disfruto al máximo en la comodidad de mi hogar. 
       </div>  

       <br>
       <br>
       <div class="btn-calificacion-comentarios">
           <br><strong class="nombre-usuario">Gabriel Soto Martell</strong><!--?aqui le cambias el nombre-->
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
       La frescura de su café es evidente desde el primer sorbo, siempre me sorprende gratamente.
       </div>  


       <br>
       <br>
       <div class="btn-calificacion-comentarios">
           <br><strong class="nombre-usuario">Valeria Ramírez Mendoza</strong><!--?aqui le cambias el nombre-->
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
           <button id="estrellas-deshabilitadas">
               <i class="fas fa-coffee"></i>
           </button>
       </div>
       Me encanta la variedad de opciones que ofrecen, siempre encuentro algo nuevo para probar
       </div>  

       <br>`
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
                                        4.6
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
                            <label for="like" class="lbl-like"><a href="../../Registro/index.php"><i class="fas fa-heart"></i></a></label>

                            
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
                            <a href="../../Registro/index.php"><button id="btn-comprar-ahora">
                                <h5>Comprar Ahora</h5>
                            </button></a>
                        </div>
                        <div class="add-to-car-completo">
                            <a href="../../Registro/index.php"><button class="añadir-al-carrito" id="${producto.id}">

                                <img src="../../img/carrito+.png" id="carritoplus" />
                            </button></a>
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




