"user strick"
// event listener
document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-reset").addEventListener("click", reset);
document.querySelector("#borrar-ultimo").addEventListener("click", borrarUltimo);
document.querySelector("#btn-sortear").addEventListener("click", sortear);

//modelo de datos
let nombres = []


function agregar(){
    let input = document.querySelector("#nombre");
    let nombre = input.value;
    
    //agregoun elemento al arreglo
    nombres.push(nombre);
    // muestro el arreglo 
    mostrar();
    // vaciar el input
    input.value = "";
    console.log(nombres);
}

function mostrar(){
    let lista = document.querySelector(".listado");
    lista.innerHTML = "";
    for (let elementoActual of nombres){
        lista.innerHTML += `<li>${elementoActual}</li>`; //recomendado usar esta forma
        /* lista.innerHTML += "<li>" + elementoActual + "</li>"; */
    }
}

function reset(){
    nombres = [];
    mostrar();
    console.log(nombres);
} 

function borrarUltimo() {
    // borrar ultimo 
    nombres.pop();
    mostrar();
}

function sortear() {
    let random = Math.floor(Math.random() * nombres.length);
    document.querySelector("#result").innerHTML = nombres[random];
}