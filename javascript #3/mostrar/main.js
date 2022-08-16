"use strict"

let botones = document.querySelectorAll('.btn');
for (let i = 0; i < botones.length; i++){
    botones[i].addEventListener('click', function(e){
        let texto = this.nextElementSibling;
        texto.classList.toggle("ver");
    });
}