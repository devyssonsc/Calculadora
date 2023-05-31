const keyboard = document.querySelector("#keyboard");
const output = document.querySelector("#outResult");

keyboard.addEventListener("click", (e) => {
    if(e.target.classList.contains("numeros")){
        alert("Números");
    }
})