const people = [
    {name: "Kamily da Silva", email: "gatinhadasilva@gmail.com"},
    {name: "Patrik Grodoviski", email: "shorelinegames@icloud.com"},
    {name: "John Marston", email: "marstonrdr@gmail.com"},
    {name: "Arthur Morgan", email: "morganrdr@gmail.com"},
    {name: "Nathan Drake", email: "drakenathan@gmail.com"}
]

const title = document.getElementById("title")
const userList = document.getElementById("taskList")

title.textContent = "Object inside array"

for (i = 0; i < people.length; i++) {
    // userList.innerHTML += "<li>" + people[i].name + " " + people[i].email +"</li>"
    userList.innerHTML += `<li>Name: ${people[i].name} <br> Email: ${people[i].email}</li>`
}