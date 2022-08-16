
let nombre = prompt("Ingrese su nombre");

console.log(nombre);

let edad = prompt("Ingrese su edad");

let nodo = document.querySelector("#saludo");
nodo.innerHTML = "hola " + nombre + " de " + edad + " años";



