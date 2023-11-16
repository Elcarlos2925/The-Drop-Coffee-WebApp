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
        <div class="centrar-tarjeta">
            <div class="contenedor-tarjeta">
                <div class="img-chip">
                    <img src="../img/chip-tarjeta.png">
                </div>
                <div class="contenedor-numero-tarjeta">
                    <input class="contenedor-numero-tarjeta" maxlength="19" pattern="[0-9]+" oninput="numeroTarjeta(this.value)" type="text" id="numeroTarjeta" placeholder="0000 0000 0000 0000" required>        
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
            <input type="submit" id="btn-finalizar-comprar" value="Finalizar Comprar">
        </div>
    </div>
<script src="script.js"></script>
</body>
</html>