/* function loadClick(event){
    console.log("loading....")
    event.preventDefault();
    let container = document.querySelector("#use-ajax");
    container.innerHTML = "<h1> loading.... </h1>"
    fetch("https://web-unicen.herokuapp.com/api/html?")
        .then(response => {
            if(response.ok){
                response.text().then(text => container.innerHTML = text);
            } else
                container.innerHTML = "<h1> error - Failed URL! </h1>";
        })
        .catch(error => {
            console.log(error);
            container.innerHTML = "<h1>Error - Connection Failed!</h1>"
        });
}
let jsloads = document.querySelectorAll(".js-load");
jsloads.forEach(e => e.addEventListener("click", loadClick));     */

function processText(t){
    let container = document.querySelector("#use-ajax");
    //egrago al dom
    container.innerHTML = t;
    //busco sobre lo que agregue y agrego eveneto 
    container.querySelectorAll(".js-comportamiento")
                .forEach(b=> b.addEventListener("click", loadClick));
}

function loadClick(event) 
{
    event.preventDefault();
    console.log("Loading...");
    document.querySelector("#use-ajax").innerHTML = "<h1>loading...</h1>";
    fetch("https://web-unicen.herokuapp.com/api/html?").then(function (response){
        if(response.ok){
            console.log("ok");
            console.log(response);
            response.text().then(processText);
        }
        else
            document.querySelector("#use-ajax").innerHTML = "<h1> Error - Failed URL!</h1>";
    })
    .catch(function(response){
        console.log(response);
        document.querySelector("#use-ajax").innerHTML = "<h1> Error - conection Failed!</h1>"
    });
}

let jsloads = document.querySelectorAll(".js-load");
jsloads.forEach(e=> e.addEventListener("click", loadClick));