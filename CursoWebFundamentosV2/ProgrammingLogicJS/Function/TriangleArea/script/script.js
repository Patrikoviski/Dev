const input = document.getElementById("number") // width of triangle
const input2 = document.getElementById("number2") // height of triangle
let span = document.getElementById("span")
let title = document.getElementById("title")
let paragraph = document.getElementById("paragraph")

function showTable() {
    let result = 0
    const inputValue = parseFloat(input.value)
    const inputValue2 = parseFloat(input2.value)
    result = (inputValue * inputValue2) / 2
    cleanTable()
    paragraph.innerHTML = ` Triangle Area: ${result}`
}

function cleanTable() {
    paragraph.innerHTML = ""
}

title.innerHTML = "Function(Area of Triangle) {"
span.innerHTML = "}"
input.placeholder = "Width of Triangle"
input2.placeholder = "height of Triangle"