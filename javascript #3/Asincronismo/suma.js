function sumar(a,b, callback){
    return callback(a+b);
}

document.querySelector("#operar").addEventListener('click', function(){
    let a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);

    sumar(a, b, function(r){
        let mostrar = document.querySelector("#result");
        mostrar.innerHTML = `<p style ="color: red;" > ${r}</p>`
    })
})