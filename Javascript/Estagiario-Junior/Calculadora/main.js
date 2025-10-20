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
    
    return funcaoPeradora(number1, number2)
}

console.log(calculadora(5, 5, "+"))
console.log(calculadora(5, 5, "-"))
console.log(calculadora(5, 5, "*"))
console.log(calculadora(5, 5, "/"))