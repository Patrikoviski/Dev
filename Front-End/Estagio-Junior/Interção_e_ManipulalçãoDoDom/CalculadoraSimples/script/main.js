const n1 = document.getElementById("number1")
const n2 = document.getElementById("number2")
const result = document.getElementById("result")
const buttons = document.querySelector(".buttons")

function calculadora(number1, number2, operador){
    const operadores = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => {
            return b === 0 ? "Erro: Divisão por zero" : a / b
        }
    }

    const funcaoPeradora = operadores[operador]

    if (!funcaoPeradora){
        return "Error: Operador invalido"
    }
    
    const resultadoCalculo = funcaoPeradora(number1, number2)
    result.textContent = resultadoCalculo
    return resultadoCalculo
}

buttons.addEventListener("click", (e) => {
    
    console.log(n1, n2)

    if (e.target.tagName === 'BUTTON'){
        const botaoClicado = e.target;
        const id = botaoClicado.dataset.id; 
        const operador = botaoClicado.textContent;

        const valorN1 = parseFloat(n1.value)
        const valorN2 = parseFloat(n2.value)

        if(isNaN(valorN1) || isNaN(valorN2)){
            result.textContent = "Erro: Insira numeros validos"
            return
        }

        calculadora(valorN1, valorN2, operador)

        console.log(`✅ Botão clicado: ${operador}`);
        console.log(`ID do Botão: ${id}`);
    }
})