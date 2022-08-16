
"user strict"
document.querySelector("#btn-compra1").addEventListener("click", compra1);
document.querySelector("#btn-compra2").addEventListener("click", compra2);
document.querySelector("#btn-compra3").addEventListener("click", compra3);

let listado = [ 
];

function compra1(){
    let producto = document.querySelector("#producto").value;
    let itemNuevo = {
        producto: producto,
        cantidad: 1,
    }
    listado.push(itemNuevo);
    mostrarListado()
}
function compra2(){
    let producto = document.querySelector("#producto").value;
    let itemNuevo = {
        producto: producto,
        cantidad: 2,
    }
    listado.push(itemNuevo);
    mostrarListado()
}
function compra3(){
    let producto = document.querySelector("#producto").value;
    let itemNuevo = {
        producto: producto,
        cantidad: 3,
    }
    listado.push(itemNuevo);
    mostrarListado()
}

function mostrarListado(){
    let listadoDom = document.querySelector("#listado");
    listadoDom.innerHTML = ''; 
    for (const item of listado) {
        listadoDom.innerHTML += `<div class="item">
                                     ${item.producto} 
                                 </div>`;
    }
}