const input = document.getElementById("number")
let span = document.getElementById("span")
let title = document.getElementById("title")
let paragraph = document.getElementById("paragraph")

function showTable() {
    let result = 0
    const inputValue = input.value
    cleanTable()
    for (i = 1; i <= 10; i++) {
        result = inputValue * i
        paragraph.innerHTML += `${inputValue} * ${i} = ${result} <br>`
    }
}

function cleanTable() {
    paragraph.innerHTML = ""
}

title.innerHTML = "Function(Multiply Table) {"
span.innerHTML = "}"
input.placeholder = "Type number here"