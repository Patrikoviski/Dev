const inverterString = (str) => str.split('').reverse().join('')
const str = "arara"
const invertido = inverterString(str)

const palidromo = str === invertido ? "Palindromo" : "Nao é Palindromo"

console.log(palidromo)