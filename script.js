var valor1 = '';
var valor2 = '';

function digitar(digito){

    if(typeof valor1 === "string"){
        while(valor1.charAt(0) === '0'){
            valor1 = valor1.slice(1);
        }
    
        valor1 += `${digito}`;
        
        escrever(valor1);

    } else {

        valor2 += `${digito}`;

        escrever(valor2);
    }
}

function AC(){
    valor1 = '';
    valor2 = '';
    
    escrever(0);
}

function backspace(){
    valor1 = valor1.slice(0, -1);
    
    escrever(valor1);
}

function iniciarCalculo(simbolo){

    valor1 = parseFloat(valor1);

    sinal = simbolo;

    escrever(0);
}

function resultado(){
    
    valor2 = parseFloat(valor2);

    var numeroCalculado = null;

    switch(sinal){
        case '/':
            numeroCalculado = valor1 / valor2;
            break;
        case '*':
            numeroCalculado = valor1 * valor2;
            break;
        case '+':
            numeroCalculado = valor1 + valor2;
            break;
        case '-':
            numeroCalculado = valor1 - valor2;
    }

    valor1 = numeroCalculado;
    valor2 = ''

    escrever(valor1);
}

function escrever(mensagem){
    var output = document.querySelector('#output');
    output.innerHTML = mensagem;
}