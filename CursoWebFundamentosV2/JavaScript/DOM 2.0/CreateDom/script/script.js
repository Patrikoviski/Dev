let title = document.createElement("h1")
let subtitle = document.createElement("h2")
let attri = document.createAttribute("id")
let attribute = document.createAttribute("id")

attri.value = "sub"
subtitle.setAttributeNode(attri)
attribute.value = "title"
title.setAttributeNode(attribute)
subtitle.textContent = "Text Content"

console.log(subtitle)

let text = document.createTextNode("Create node in dom")
title.appendChild(text)
console.log(title)

document.querySelector(".container").appendChild(title)
document.querySelector(".container").appendChild(subtitle)

let title2 = document.querySelector("h1")

title2.textContent = "title 2 -- - -- - - -- -"

let list =  document.querySelector("ul")
let container = document.querySelector(".container")

container.insertBefore(title2, list)
container.insertBefore(title, container.firstChild)

let sublevel = document.querySelector("ul ul")
sublevel = sublevel.cloneNode(true)

let h2 = document.querySelector("h2")

container.insertBefore(sublevel, h2.nextElementSibling)

let secondParagraph = container.firstElementChild.nextElementSibling.nextElementSibling

let span = document.createElement("span")
span.textContent = "dinamic span"

secondParagraph.after(span)
secondParagraph.before("text inserted with before")

let container2 = document.querySelector(".container2")

// beforebegin, afterbegin, beforeend, afterend

container2.insertAdjacentHTML("beforebegin", "<b> beforebegin </b>")
container2.insertAdjacentHTML("afterbegin", "<b> afterbegin </b>")
container2.insertAdjacentHTML("beforeend", "<b> beforeend </b>")
container2.insertAdjacentHTML("afterend", "<b> afterend</b>")

let em = document.createElement("em")
em.textContent = "enfasis text"
container2.insertAdjacentElement("beforeend", em)

// list.remove()
// parentNode.removeChild(list)

// list.parentElement.removeChild(list)

let parent = document.body
let newChild = container.querySelector("h1").cloneNode(true)
let oldChild = document.querySelector("h3")
parent.replaceChild(newChild, oldChild)