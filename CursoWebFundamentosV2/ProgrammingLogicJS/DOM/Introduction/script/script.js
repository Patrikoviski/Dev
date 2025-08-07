let title = document.getElementById("title")
let paragraph = document.getElementById("paragraph")
let user = document.getElementById("user")
let list = document.getElementById("taskList")

title.textContent = "DOM - Document Object Model"
paragraph.innerHTML = "this is a paragraph contain a <i> italic text</i>"
user.placeholder = "Insert text here"
list.innerHTML += "<li>Learn CSS</li>" 
list.innerHTML += "<li>Learn Javascript</li>" 
list.innerHTML += "<li>Learn DOM deep</li>" 
list.innerHTML += "<li>Create some</li>" 