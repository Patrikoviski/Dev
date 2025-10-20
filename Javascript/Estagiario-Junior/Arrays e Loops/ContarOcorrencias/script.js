const numbers = [2, 1, 2, 3, 4]

function contadorOcorrencias(array){
    return array.reduce((acc, number) => {
        acc[number] = (acc[number] || 0) + 1
        return acc
    }, {})
}

console.log(contadorOcorrencias(numbers))