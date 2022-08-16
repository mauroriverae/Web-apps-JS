//event listener al boton jugar
let btn = document.querySelector("#btn-play");
btn.addEventListener("click", jugar);

//declarando el arreglo de opciones de la maquina 
//arreglo que guarda string 0 1 y 2
let optiones = ["piedra","papel","tijera", "lagarto", "spoock","mauro", "rivera"];

function jugar (){
    //geneero un numero rabdom entre 0  y el tamaño del arreglo 
    console.log("el tamaño del arreglo es: optiones. length")

    let random = Math.floor( Math.random() * optiones.length);
    console.log(random)
    let option = optiones[random];

    //escribo la opcion en html
    document.querySelector('.result').innerHTML = option; 
} 