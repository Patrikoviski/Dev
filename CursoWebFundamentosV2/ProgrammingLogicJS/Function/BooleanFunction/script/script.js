const input = document.getElementById("number")
let span = document.getElementById("span")
let title = document.getElementById("title")
let paragraph = document.getElementById("paragraph")

function outputSome() { 
    let number = input.value
    paragraph.innerHTML = boolean(number)
}

function boolean(n1) {
    if (n1 % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

title.innerHTML = "Function(Boolean) {"
span.innerHTML = "}"
input.placeholder = "Ex: 1, 2, 3, 4, 5"
signal.placeholder = "Ex: + - * /"
input2.placeholder = "Ex: 1, 2, 3, 4, 5"