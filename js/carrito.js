const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorProductos = document.querySelector("#contenedor-productos");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");


function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

if(productosEnCarrito){
    contenedorCarritoVacio.classList.add("disabled");
    contenedorProductos.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");
    
    contenedorProductos. innerHTML = "";

    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        
        div.classList.add("contenedor-carrito");
        div.innerHTML = `
            <div class="producto-contenedor">                           
                <img src="../${producto.imagen}" id="imagen-producto">
                <div class="centrar">
                    <div class="contenedor-superior">
                        <p id="nombre-producto">${producto.titulo}</p>
                        <div class="precio-mxn">
                            <p id="precio-producto">$ ${producto.precio}</p>
                            <p class="mxn">MXN</p>
                        </div>
                    </div>
                    <div class="contenedor-inferior">
                        <button class="eliminar"><img src="../img/trash-kaki-relleno.png" width="auto" height="100%"></button>
                        <div class="cantidad-contenedor">
                            <div class="left">
                                <button class="menos">-</button>
                            </div>
                            <div class="cantidad-contenedor">
                                <label for="cantidad" id="cantidad">${producto.cantidad}</label>
                            </div>
                            <div class="right">
                                <button class="mas">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                                                                                                      
        `;
        contenedorProductos.append(div);
    })
    const div1 = document.createElement("div");
        
    div1.classList.add("contenedor-carrito");
    div1.innerHTML = `
        <div class="datos-carrito">
                <div class="subtotal-contenedor">                          
                    <h4>Subtotal: </h4>
                    <p id="subtotal">$ 750.00</p>
                    <p class="mxn">MXN</p>
                </div>                                                      
                <div class="envio-contenedor">                              
                    <h4>Envío: </h4>
                    <p id="envio">$ 0.00</p>
                    <p class="mxn">MXN</p>
                </div>                                                      
                <p id="promocion-envio">Promoción envío gratis aplicada</p>
                <div class="total-contenedor">                              
                    <h3>Total: </h3>
                    <p id="total">$ 750.00</p>
                    <p class="mxn">MXN</p>
                </div>                                                      
                <button class="Finalizar-compra">ir al pago</button>
            </div>
    `;
    contenedorProductos.append(div1);


actualizarNumerito();

}else{
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorProductos.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}



