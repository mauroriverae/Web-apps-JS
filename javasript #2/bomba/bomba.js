"use strict"

let inputTiempo = document.querySelector('#tiempo');
let DivCuentaRegresiva = document.querySelector('#cuenta-regresiva');
let btnActivar = document.querySelector('#btn-activar');

btnActivar.addEventListener('click', iniciar);

function iniciar() {
    alert("corra, se iniciara la cuenta regresiva en 5 segundos");
    setTimeout(iniciarCuentaRegresiva, 5000);
}
function iniciarCuentaRegresiva() {
    let valorActual = inputTiempo.value;
    let intervalo = setInterval(function(){
        DivCuentaRegresiva.innerHTML = valorActual;
        if(valorActual !== 0){
            valorActual--;
        } else{
            clearInterval(intervalo);
            
            DivCuentaRegresiva.innerHTML = "BOOOMM!!!!!";
        }
    }, 1000);
}

