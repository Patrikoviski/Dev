const soma = (number1, number2) => number1 + number2
const mult = (number1, number2) => number1 * number2

function executarOperacao(number1, number2, callback){
    return callback(number1, number2)
}

console.log(executarOperacao(1, 5, soma))