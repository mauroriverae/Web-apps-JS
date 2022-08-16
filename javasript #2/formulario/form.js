"use strict"
let form = document.querySelector('#form');
form.addEventListener('submit', agregar);

function agregar(e) {
    e.preventDefault();
    //agarrar todos los datos del form
    let formData = new FormData(form);
    
    let email = formData.get('email');
    let nombre = formData.get('nom');
    let password= formData.get('password');

    console.log(email, nombre, password);


    //a los input conviene como buena practica no darle ID sino name
}