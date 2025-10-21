function numeroPrimo(number){
    if (number % number === 0 & number % 1 === 0 & number % 2 != 0){
        return "é número primo"
    }
    else {
        return "Não é número primo"
    }
}

console.log(numeroPrimo(12))