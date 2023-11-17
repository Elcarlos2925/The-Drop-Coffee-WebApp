<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

<link rel="stylesheet" href="style.css">

</head>
<body>
    <div class="fondo-contenedor">
            
            <form method="post">
                <div class="centrar-tarjeta card" id="card-container">
            
                    <div class="face front contenedor-tarjeta">
                        <div class="img-chip">
                            <img src="../img/chip-tarjeta.png">
                        </div>
                        <div class="contenedor-numero-tarjeta">
                            <input class="contenedor-numero-tarjeta" maxlength="19" pattern="[0-9]+" oninput="numeroTarjeta1(this.value)" type="text" id="numeroTarjeta" placeholder="0000 0000 0000 0000" required>
                        </div>
                        <div class="fecha-titular">
                            <div class="fecha-vencimiento">
                                <div id="valido-hasta">
                                    <p id="hasta">valido <br> hasta</p>
                                </div>
                                <input type="text" id="fecha" maxlength="5" placeholder="mm/yy" oninput="formatoFecha(this)" required>
                            </div>
                            <input type="text" id="nombreTitular" class="titular" oninput="formatoTitular(this.value)" placeholder="nombre del titular" required>
                        </div>
                    </div>
            
                    <div class="face back contenedor-tarjeta-trasero">
                        <div id="banda-magnetica">
                        </div>
                        <div class="contenedor-cvv-tarjeta">
                            <label for="cvv">CVV</label>
                            <input class="contenedor-numero-tarjeta" maxlength="3" pattern="[0-9]+" oninput="cvvTarjeta(this.value)" type="text" id="cvv" placeholder="000" required>
                        </div>
                    </div>
                </div>
                <div class="tarjeta-boton">
                    <label for="parte-trasera">CVV: </label>
                    <input type="checkbox" id="btn-switch">
                    <label for="btn-switch" class="lbl-switch"></label>
                    <input type="submit" id="btn-finalizar-comprar" value="Finalizar Comprar">
                </div>
            </form>
    </div>
</body>
</html>
<script src="script.js"></script>