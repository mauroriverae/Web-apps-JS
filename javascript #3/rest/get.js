const url = 'https://60aab45166f1d000177731ea.mockapi.io/api/usuarios';
let id = 0;

async function obtenerDatos (){
    const lista = document.querySelector('#lista_nombre');
    lista.innerHTML=  "";
    try{
        let res = await fetch(url); //GET url
        let json = await res.json(); //texsto json a objet
        console.log(json)
        for (const usuario of json) {
            let nombre = usuario.nombre;
            let numero = usuario.numero;
            id = usuario.id;
            lista.innerHTML+=  `<ul>${nombre}, ${numero}</ul>` ;

        }
    } catch  (error){
        console.log(error);
    }
}

async function enviarDato() {
    let nombre = document.querySelector("#txtnombre").value;
    let numero = document.querySelector("#txtnumero").value;
    
    let usuario = {
        "nombre": nombre,
        "numero": numero
    }
    try{
        let res = await fetch(url, {
            "method": "POST",
            "headers": { "Content-type" : "application/json" },
            "body": JSON.stringify(usuario)
        });
        if(res.status === 201){
            document.querySelector("#msg").innerHTML  ="creeado!!!!!!";
        }
    } catch(error){
         console.log(error);
    }
}

async function borrarultimo(){
    try{
        let res = await fetch(`${url}/${id}`,{
            "method": "DELETE",
        });
        if(res.status === 200){
            document.querySelector("#msg").innerHTML  ="eliminado!";
        }
    } catch(error){
         console.log(error);
    }
} 

async function modificarultimo(){
    let nombre = document.querySelector("#txtnombre").value;
    let numero = document.querySelector("#txtnumero").value;
    
    let usuario = {
        "nombre": nombre,
        "numero": numero
    }
    try{
        let res = await fetch (`${url}/${id}` , {
            "method": "PUT",
            "headers": { "Content-type" : "application/json" },
            "body": JSON.stringify(usuario)
        });
        if(res.status === 200){
            document.querySelector("#msg").innerHTML  ="Modificado!!!!";
        }
    } catch(error){
         console.log(error);
    }
}

document.querySelector("#button").addEventListener("click", enviarDato);
document.querySelector("#borrar").addEventListener("click", borrarultimo);
document.querySelector("#modificar").addEventListener("click", modificarultimo)

obtenerDatos()