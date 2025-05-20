function resultado() {
    var horas = document.getElementById("horas").value;
    var tipo = document.getElementById("auto").value;
    var tarifa = 0;

    if (horas <= 0) {
        document.getElementById("espacioresul").innerHTML = "<h2>Ingresa un número válido en horas.</h2>";
        return;
    }

    if (tipo == "autochico") {
        tarifa = 20;
    }
    if (tipo == "Camioneta") {
        tarifa = 30;
    }
    if (tipo == "Camion") {
        tarifa = 40;
    }

    var total = horas * tarifa;

    document.getElementById("espacioresul").innerHTML = "<h2>Total a pagar: $" + total + "</h2>";
}
