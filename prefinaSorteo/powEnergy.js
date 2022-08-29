"user strict";
let registros = [];
let registrado = false;
let form = document.querySelector("#form_registro");
let btnSortear = document.querySelector("#btn_sortear");
let avisoGanador = document.querySelector("#lista_sorteo");
let listaSorteo = document.querySelector("#lista_serteo");
btnSortear.addEventListener("click", sortear);
let register = document.querySelector('.register');

form.addEventListener("submit", agregar);

function agregar (e) {
    e.preventDefault();
    let formData = new FormData(form);
    let nombre = formData.get("nombre");
    let dni = formData.get("dni");
    let edad = formData.get("edad");

    for(item of registros) {
        if(item.dni === dni) {
            registrado = true;
        }
    }
    if (edad > 18 && !registrado) {
        let registro = {
            'nombre' : nombre,
            'dni' : dni,
            'edad' : edad
        }
        registros.push(registro);
        register.innerHTML =`<p>Su registro se guardo correctamente</p>`
    }
    else {
        alert("No se puede registrar ")
    }
    form.reset();
}

function sortear () {
    mostrarListado();
    let indexGanador = Math.floor(registros.length*Math.random());
    avisoGanador.innerHTML += `<p>el ganador es ${registros[indexGanador].nombre} con dni nro ${registros[indexGanador].dni} de edad ${registros[indexGanador].edad}</p>`;
    if(registros[indexGanador].edad < 21){
        avisoGanador.innerHTML += `<p>Para retirar el premio el ganador debe asister acompañando de un mayor de 21 años</p>`;
        avisoGanador.classList.remove("mayor");
        avisoGanador.classList.add("mayor")
    } else {
        avisoGanador.classList.remove("menor");
        avisoGanador.classList.add("menor")
    }
}

function mostrarListado () {
    for(item of registros) {
        listaSorteo += `<li> ${item.nombre}, ·${item.dni}</li>`
    }
}