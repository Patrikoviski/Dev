const numbers = [2, 0, -2, 4, 5]

function encontraMenor(array){
    return Math.min(...array)
}

console.log(encontraMenor(numbers))