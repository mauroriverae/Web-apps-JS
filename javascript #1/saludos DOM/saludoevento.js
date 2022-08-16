function saludarcatedra(){
    let nombre = document.querySelector("#nombre").value;

    console.log("hola");
    console.log("hola JAVIER");
    console.log("hola nacho");
    console.log("hola ,mati");
    console.log("hola franco");
    console.log("hola " + nombre + "!" );
    document.querySelector("#saludo").innerHTML = "Hola " +nombre;
}

