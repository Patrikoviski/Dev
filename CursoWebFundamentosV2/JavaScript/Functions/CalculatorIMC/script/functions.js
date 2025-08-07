/*
    IMC = weight / height ^ 2
    return just one number
    do a error if get a parameter NaN
    do a error if get no one parameter
*/

let input = document.getElementById("number")
let input2 = document.getElementById("number2")
let output = document.getElementById("output")

function outputSome() { 
    let number1 = input.value
    let number2 = input2.value
    let imc = averageIMC(number1, number2).toFixed(2)

    if (imc > 16 && imc < 16.9) {
        output.innerHTML = `IMC: ${imc} <br> Very lower weight`
    } else if (imc > 17 && imc < 18.4) {
        output.innerHTML = `IMC: ${imc} <br> Lower weight`
    } else if (imc > 18.5 && imc < 24.9) {
        output.innerHTML = `IMC: ${imc} <br> Normal weight`
    }
}

function averageIMC(input, input2) {
    return parseFloat(input) / (parseFloat(input2) ** 2)
}

number.placeholder = "Weight"
number2.placeholder = "Height"