let form  = document.querySelector("#form_cerveza");
//let formCupon = document.querySelector("#form_cupon");
form.addEventListener("submit",agregar);
//formCupon.addEventListener("submit", cupon);

let pedidos = []
let descuentoAplicado = false;

function agregar(e) {
   e.preventDefault(); //previene evento tipo submit
   let formData = new FormData(form);
   let cerveza = formData.get("cerveza");
   let cantidad = formData.get("cantidad");
 
   let totalPedidas = calcularCantidadCervezas();
   // lo importante es la validacion de la cantidad
 
 
   if (cantidad > 1 && cantidad < 10 && (totalPedidas + cantidad) <= 20) {
       let pedido = {
           'cerveza' : cerveza,
           'cantidad': cantidad,
       }
       pedidos.push(pedido);
       imprmir();
   } else {
        alert("no se puede cargar su pedido");
       //esto esta bien porque no esta especificada la notificacion al usuario
   }
}

function calcularCantidadCervezas() {
   let sum = 0;
   for (let index = 0; index < pedidos.length; index++) {
      sum += pedidos[index].cantidad;  
   }
   return sum;
}

function imprmir (){
   console.table(pedidos);
   let listadoDom = document.querySelector("#listado");
   listadoDom.innerHTML = "";
   for (const item of pedidos) {
       listadoDom.innerHTML += `<td class = "item">${item.cerveza}  ${item.cantidad}</td>`
   }
}

/* function cupon(e){
   e.preventDefault();
   console.log("cupon")
}


function imprmir(){
   console.table(listado);
   let listadoDom = document.querySelector("#listado");
   listadoDom.innerHTML = "";
   for (const item of pedidos) {
       listadoDom.innerHTML += `<div class = "item">${item.Cantidad}  ${item.cerveza}</div>`
   }
} */
