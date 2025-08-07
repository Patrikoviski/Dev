const student = [
    { name: "Kamily", notes: [10, 7, 9, 8]},
    { name: "Patrik", notes: [6, 7, 8, 6]},
    { name: "John", notes: [1, 3, 3, 8]}
]

const list = document.getElementById("taskList")
let title = document.getElementById("title")
let paragraph = document.getElementById("paragraph")
let userInput = document.getElementById("user")


title.innerHTML = "Data from a student"
userInput.placeholder = "Type here"

html = ""

for (i = 0; i < student.length; i++) {
    html += `<li> ${student[i].name}`
    html += `<ul>`
    for (j = 0; j < student[i].notes.length; j++) {
        html += `<li> ${student[i].notes[j]} </li>`
    }
    html += `</ul>`
    html += `</li>`
}

list.innerHTML = html