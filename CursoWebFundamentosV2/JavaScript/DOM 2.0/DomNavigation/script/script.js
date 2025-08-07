console.log(document.body)
console.log(document.body.parentElement)
console.log(document.body.parentNode)

let html = document.body.parentElement.parentElement
let html2 = document.body.parentElement.parentNode

console.log(html)
console.log(html2)

let h2 = document.querySelector("h2")
let h2NextSibling = h2.nextElementSibling
h2NextSibling.style.background = "yellow"

console.log(h2.previousElementSibling)