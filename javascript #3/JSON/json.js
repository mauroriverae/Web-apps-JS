"use strict"
document.querySelector("#btn-compra1").addEventListener("click", function(e){
    items(1)
    mostrarListdado ();
});
document.querySelector("#btn-compra2").addEventListener("click", function(e){
    items(2)
    mostrarListdado ();
});
document.querySelector("#btn-compra3").addEventListener("click", function(e){
    items(3)
    mostrarListdado ();
}); 

let listado =[] 

function items(Q){
    let inputp = document.querySelector("#producto").value;
    let itemNuevo = {
        Producto: inputp,
        Cantidad: Q, 
    }
    listado.push(itemNuevo);
    document.querySelector("#producto").value= "";
}


function mostrarListdado (){
    console.table(listado);
    let listadoDom = document.querySelector("#listado");
    listadoDom.innerHTML = "";
    for (const item of listado) {
        listadoDom.innerHTML += `<div class = "item">${item.Cantidad}  ${item.Producto}</div>`
    }
}

