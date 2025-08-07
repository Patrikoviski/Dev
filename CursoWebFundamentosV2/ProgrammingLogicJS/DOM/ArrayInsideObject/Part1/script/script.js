const student = {
    name: "John",
    notes: [1, 3, 3, 8]
}

const list = document.getElementById("taskList")
let title = document.getElementById("title")
let paragraph = document.getElementById("paragraph")
let total = document.getElementById("result")
let userInput = document.getElementById("user")
let approved = null
let average = 0


title.innerHTML = "Data from a student"
paragraph.innerHTML = "Notes: "
userInput.placeholder = "Type here"

for (i = 0; i < student.notes.length; i++) {
    list.innerHTML += `<li>${student.notes[i].toFixed(1)}</li><br>`
    average += student.notes[i]
}

average /=  4

if (average >= 7) {
    approved = "APPROVED"
}
else {
    approved = "REPPROVED"
}

total.innerHTML = `average: ${average.toFixed(1)} <br> Exame: ${approved}`