const input = document.getElementById("number")
const signal = document.getElementById("signal") 
const input2 = document.getElementById("number2") 
let span = document.getElementById("span")
let title = document.getElementById("title")
let paragraph = document.getElementById("paragraph")

function outputSome() { 
    let number1 = input.value
    let simblo = signal.value
    let number2 = input2.value
    paragraph.innerHTML = Some(number1, simblo, number2)
}

function Some(input, signal ,input2) {
    switch (signal) {
        case "+":
            return parseFloat(input) + parseFloat(input2)
        
        case "-":
            return parseFloat(input) - parseFloat(input2)
        
        case "*":
            return parseFloat(input) * parseFloat(input2)
        
        case "/":
            return parseFloat(input) / parseFloat(input2)
        default:
            return null        
    }
}

title.innerHTML = "Function(Calculator) {"
span.innerHTML = "}"
input.placeholder = "Ex: 1, 2, 3, 4, 5"
signal.placeholder = "Ex: + - * /"
input2.placeholder = "Ex: 1, 2, 3, 4, 5"