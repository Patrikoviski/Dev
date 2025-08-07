let number1 = parseFloat(prompt('Type a number between 0 and 10: '))
let number2 = parseFloat(prompt('Type other number 0 and 10: '))

if (isNaN(number1) || isNaN(number2) == 'true') {
    alert('You just can type numbers!')
}
else {
    if (number1 < 0 || number1 > 10 || number2 < 0 || number2 > 10) {
    alert('you just can type number between 0 and 10!')
    }

    else {
        let average = (number1 + number2) / 2

        if (average > 4 && number1 > 0  && number2 > 0) {
            alert('APPROVED')
        }

        else {
            alert('REPPROVED')
        }

        alert('The program is finish!')
    }
}