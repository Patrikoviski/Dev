const input = document.getElementById("number")
let span = document.getElementById("span")
let title = document.getElementById("title")
let paragraph = document.getElementById("paragraph")

function outputSome() { 
    let number = input.value
    paragraph.innerHTML = boolean(number)
}

function boolean(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
}

title.innerHTML = "Function(Boolean) {"
span.innerHTML = "}"
input.placeholder = "Type a year"