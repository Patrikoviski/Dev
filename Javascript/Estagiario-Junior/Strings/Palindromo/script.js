const inverterString = (str) => str.split('').reverse().join('')
const str = "abacaxi"
const invertido = inverterString(str)

const palidromo = str === invertido ? "Palindromo" : "Nao é Palindromo"

console.log(palidromo)