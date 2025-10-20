function fatorial(number){
    let result = 1
    for (i = number; i > 0; i--){
        console.log(`${number}!`)
        result = result * i
    }
    return result
}

console.log(fatorial(5))