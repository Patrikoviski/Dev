const input = document.getElementById("number") // Radius Area
let span = document.getElementById("span")
let title = document.getElementById("title")
let paragraph = document.getElementById("paragraph")

function promptAlert() { 
    let radius = parseFloat(prompt("Type radius"))
    let msg = showArea(radius)
    alert(msg.toFixed(2))
}

function inputAlert() {
    let radiusInput = parseFloat(input.value)
    let msg = showArea(radiusInput)
    alert(msg.toFixed(2))
}

function promptOutput() {
    let radius = parseFloat(prompt("Type radius"))
    let msg = showArea(radius)
    paragraph.innerHTML = msg.toFixed(2)
} 

function inputOutput() {
    let radiusInput = parseFloat(input.value)
    let msg = showArea(radiusInput)
    paragraph.innerHTML = msg.toFixed(2)
}

function showArea(input) {
    cleanTable()
    let area = Math.PI * input ** 2

    return area
}

function cleanTable() {
    paragraph.innerHTML = ""
}

title.innerHTML = "Function(Radius Area) {"
span.innerHTML = "}"
input.placeholder = "Type radius area"