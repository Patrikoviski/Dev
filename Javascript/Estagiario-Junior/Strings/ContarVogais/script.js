const vogals = ["a", "e", "i", "o", "u"]

function contadorVogais(str){
    const caracteres = str.toLowerCase().split('')

    const vogaisEncontradas = caracteres.filter(char => {
        return vogals.includes(char)
    })

    return vogaisEncontradas.length
}

console.log(contadorVogais("abcdeiou"))