document.getElementById("btn-prender").addEventListener("click", prender);
document.getElementById("btn-apagar").addEventListener("click", apagar);
prender();

function prender() {
    //cambiar foto de la lampara
    /* document.getElementById("img-lampara").src = "lampara-on.jpg"; */
    //cambiar fondo de la pagina
    document.getElementById("fondo").classList.add("prendido");
    document.getElementById("fondo").classList.remove("apagado")
}

function apagar() {
    /* document.getElementById("img-lampara").src = "lampara-of.jpg"; */
    document.getElementById("fondo").classList.add("apagado");
    document.getElementById("fondo").classList.remove("prendido");
}