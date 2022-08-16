document.querySelector("#btn-enviar").addEventListener("click", nombre);

let listado = []

function nombre(){
    let input__uno = document.querySelector("#input__email").value;
    let input__dos = document.querySelector("#input__nombre").value;
    let input__tres = document.querySelector("#input__comentario").value;
    let imNuevo = {
        email: input__uno,
        nombre: input__dos,
        comentario: input__tres
    }
    listado.push(imNuevo);
    mostrarListado()
}


function mostrarListado(){
    let listadoDom = document.querySelector("#body__t");
    listadoDom.innerHTML = ''; 
    for (const item of listado) {
        listadoDom.innerHTML += `<tr class ="tr__js">
                                    <td>
                                        ${item.email}
                                    </td> 
                                    <td>
                                        ${item.nombre}
                                    </td> 
                                    <td>
                                        ${item.comentario}
                                    </td> 
                                 </tr>`;
    }
}