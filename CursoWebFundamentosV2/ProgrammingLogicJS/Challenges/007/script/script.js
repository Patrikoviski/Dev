let number1 = parseFloat(prompt('Type a number between 0 and 10: '))
let number2 = parseFloat(prompt('Type other number 0 and 10: '))

let average = (number1 + number2) / 2

alert('Average is <= 4? = ' + (average <= 4 || number1 == 0 || number2 == 0))