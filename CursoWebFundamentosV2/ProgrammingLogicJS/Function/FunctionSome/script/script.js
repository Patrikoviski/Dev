const input = document.getElementById("number")
const input2 = document.getElementById("number2") 
let span = document.getElementById("span")
let title = document.getElementById("title")
let paragraph = document.getElementById("paragraph")

function outputSome() { 
    let number1 = input.value
    let number2 = input2.value
    paragraph.innerHTML = Some(number1, number2)
}

function Some(input, input2) {
    return parseFloat(input) + parseFloat(input2)
}

title.innerHTML = "Function(Radius Area) {"
span.innerHTML = "}"
input.placeholder = "Type radius area"