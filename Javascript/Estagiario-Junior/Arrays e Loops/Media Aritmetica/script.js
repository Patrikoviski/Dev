const numbers = [5, 6, 7, 8]

// versao moderna

function mediaAritmetica(array){
    const soma = array.reduce((acc, element) => acc + element, 0)

    const count = array.length

    return soma / count
}

console.log(mediaAritmetica(numbers).toFixed(1))


// versao funcional nao moderna

// function mediaAritmetica(array){
//     const count = array.length
//     let result = 0

//     array.forEach(element => {
//         result = result + element
//     });
//     return result = result / count
// }