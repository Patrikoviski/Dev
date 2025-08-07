let object = {name: "kamily", email: "gatinhadasilva@gmail.com"}
let number = document.getElementById("number")
let number2 = document.getElementById("number2")
let span = document.getElementById("span")
let title = document.getElementById("title")
let paragraph = document.getElementById("paragraph")

// object = null


try {
    function Calc() {
        let width = number.value
        let height = number2.value
        paragraph.innerHTML = RectangleArea(width, height)
    }

    function Calc2() {
        let width = number.value
        let height = number2.value
        paragraph.innerHTML = TriangleArea(width, height)
    }

    function RectangleArea(n1, n2) {
        cleanTable()
        return n1 * n2
    }

    function TriangleArea(n1, n2) {
        cleanTable()
        return n1 * n2 / 2
    }

    function cleanTable() {
        paragraph.innerHTML = ""
    }

} catch(e) {
    console.log(e)
    console.log(e.message)
    alert(`Algo deu errado, tente novamente  ${e.message}`)
}

// document.getElementById("paragraph").innerHTML =  `Name: ${object.name} <br> Email: ${object.email}`

number.placeholder = "Type Width"
number2.placeholder = "Type Height"
title.innerHTML = "TryCatch"