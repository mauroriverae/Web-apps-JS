
function select_tab(id) {
    document
        .querySelectorAll(".route")
        .forEach((item) => item.classList.remove("selected"));
    document
        .querySelectorAll("#" + id)
        .forEach((item) => item.classList.add("selected"));
}
async function load_content(id){
    console.log("Loading content for {"+ id + "}");
    let container = document.querySelector("#content");
    try{
        let response = await fetch(`${id}.html `);
        if(response.ok){
            let content = await response.text();
            container.innerHTML = content;      
        }
        else{
            container.innerHTML = "Error loading for elseeeee /" +id+ "....";
        }
    } catch(error){
        container.innerHTML = "error";
    }   
}



function push (event){
    let id = event.target.id;
    select_tab(id);
    load_content(id);
    window.history.pushState({ id }, `${id}`, `/page/${id}`);
}

window.onload = (event) => {
    window["home"].addEventListener("click", (event) => push(event));
    window["about"].addEventListener("click", (event) => push (event));
    window["gallery"].addEventListener("click", (event) => push (event));
    window["contact"].addEventListener("click", (event) => push (event));
    window["help"].addEventListener("click", (event) => push (event));
};
window.addEventListener("popstate", (event) => {
    let stateId = event.state.id;
    console.log("stateID = ", stateId);
    select_tab(stateId);
    load_content(stateId);
});