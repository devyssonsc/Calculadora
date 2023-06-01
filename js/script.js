const keyboard = document.querySelector("#keyboard");
const output = document.querySelector("#outResult");

let sinal;
let primeiroValor;
let segundoValor;
let isSecondValue = false;



keyboard.addEventListener("click", (e) => {

    let targetId = e.target.id;

    if(e.target.classList.contains("numeros")){
        salvarNumero(targetId);
    } else if(e.target.classList.contains("sinais")){
        definirSinal(targetId);
    }  
})



const salvarNumero = (targetId) => {
    if(output.innerText == 0){
        output.innerText = targetId.charAt(targetId.length - 1);
    } else{
        output.innerText += targetId.charAt(targetId.length - 1);
    }

    if(isSecondValue == false){
        primeiroValor = Number(output.innerText);
    } else{
        segundoValor = Number(output.innerText);
    }
}

const definirSinal = (targetId) => {
    document.querySelectorAll(".sinais").forEach(sinal => {sinal.style.backgroundColor = "#ff0084"})
    e.target.style.backgroundColor = "#a10053";

    if(targetId == "btDivisao"){
        sinal = "/";
    } else if(targetId == "btMultiplicacao"){
        sinal = "*";
    } else if(targetId == "btSoma"){
        sinal = "+";
    } else {
        sinal = "-";
    }

    isSecondValue = true;
    output.innerText = "0";
}