let number1 = parseFloat(prompt('Type a number between 0 and 10: '))
let number2 = parseFloat(prompt('Type other number 0 and 10: '))

let average = (number1 + number2) / 2

if (average > 4) {
    alert('APPROVED')
}

else {
    alert('REPPROVED')
}

alert('The program is finish!')