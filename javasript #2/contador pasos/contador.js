"use strct"

document.querySelector('#btn-incrementar').addEventListener('click', function(e){incrementar(1);});
document.querySelector('#btn-decrementar').addEventListener('click', function(e){incrementar(-1)});
document.querySelector('#btn-agregar').addEventListener('click', incrementarManual);

//alamaceno cantidad de pasos diarios 
let totalPasos = 0;

function incrementarManual(){
    let pasos = document.querySelector('#input-pasos').value;
    let pasosNumber = Number(pasos);
    incrementar(pasosNumber);
}


function incrementar(pasos){
    totalPasos += pasos;
    //actualizo el html
    document.querySelector('.pasos').innerHTML = totalPasos;    
}
