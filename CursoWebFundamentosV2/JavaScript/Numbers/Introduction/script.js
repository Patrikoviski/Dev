let number = 1234567.890
let number2 = "3.456"


// toFixed()

console.log(number.toFixed(2))


// toPrecision()

console.log(number.toPrecision(8))


// toExponential()

number = 12.34567
console.log(number.toExponential())
console.log(number.toExponential(4))


// toString()

number = 15
console.log("15 in binary")
console.log(number.toString(2))
console.log("----------------------")

console.log("0 in binary")
console.log(0 .toString(2))
console.log("----------------------")


console.log("1 in binary")
console.log(1 .toString(2))
console.log("----------------------")

console.log("2 in binary")
console.log(2 .toString(2))
console.log("----------------------")

console.log("3 in binary")
console.log(3 .toString(2))
console.log("----------------------")


// toLocaleString()

number = 123456.789
console.log(number.toLocaleString())
console.log(number.toLocaleString("pt-BR", {style: "currency", currency: "USD"}))


// MAX_VALUE and MIN_VALUE

console.log(Number.MAX_VALUE, Number.MIN_VALUE)


// isNaN()

console.log(isNaN(number2))