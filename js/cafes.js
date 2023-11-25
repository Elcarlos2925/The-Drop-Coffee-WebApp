const productos=[
    {
        "id": "1",
        "titulo": "Café de Veracruz 300g",
        "imagen": "./img/C1.png",
        "precio": 250.00
    },

    {
        "id": "2",
        "titulo": "Café de Puebla 300g",
        "imagen": "./img/C3.png",
        "precio": 220.00
    },

    {
        "id": "3",
        "titulo": "Café de Chiapas 300g",
        "imagen": "./img/C5.png",
        "precio": 230.00
    },

    {
        "id": "4",
        "titulo": "Café de Oaxaca 300g",
        "imagen": "./img/C7.png",
        "precio": 200.00
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
        "precio": 230.00
    },

    {
        "id": "7",
        "titulo": "Café de Veracruz Descafeinado 300g",
        "imagen": "./img/C2.png",
        "precio": 220.00
    },

    {
        "id": "8",
        "titulo": "Café de Puebla Descafeinado 300g",
        "imagen": "./img/C4.png",
        "precio": 200.00
    },

    {
        "id": "9",
        "titulo": "Café de Chiapas Descafeinado 300g",
        "imagen": "./img/C6.png",
        "precio": 215.00
    },

    {
        "id": "10",
        "titulo": "Café de Oaxaca Descafeinado 300g",
        "imagen": "./img/C8.png",
        "precio": 190.00
    },

    {
        "id": "11",
        "titulo": "Café mezclas mexicanas Descafeinado 300g",
        "imagen": "./img/C10.png",
        "precio": 205.00
    },

    {
        "id": "12",
        "titulo": "Café especial <br> Descafeinado 300g",
        "imagen": "./img/C12.png",
        "precio": 220.00
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const numerito = document.querySelector("#numerito");
let botonesAgregar = document.querySelectorAll(".añadir-al-carrito");

function CargarProductos(){
/*
    contenedorProductos. innerHTML = "";*/

    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("fondo-contenedor");
        div.innerHTML = `
        <div class="contenedor_producto">
            <div class="imagen-cafe" id="${producto.id}">
                <a href="Productos/Cafes/Cafe${producto.id}.php" ><img src="${producto.imagen}"></a>
            </div>

            <div class="descripcion-producto">
                <div style="color:#EBE6DF" id="nombre-cafe">${producto.titulo}</div>
                <div class="precio-boton">
                    <div id="precio">$${producto.precio}</div>
                    <div class="btn-add-carrito"><button class="añadir-al-carrito" id="${producto.id}"><a href="Registro/index.php"><img src="img/carrito+.png" class="carritoplus" /></a></button>
                </div>
            </div>
        </div>
        `;
        contenedorProductos.append(div);
    })

}

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".añadir-al-carrito");
    console.log(botonesAgregar);

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}
CargarProductos();