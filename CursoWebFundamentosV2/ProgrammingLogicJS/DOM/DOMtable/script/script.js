const people = [
    {name: "Kamily da Silva", email: "gatinhadasilva@gmail.com"},
    {name: "Patrik Grodoviski", email: "shorelinegames@icloud.com"},
    {name: "John Marston", email: "marstonrdr@gmail.com"},
    {name: "Arthur Morgan", email: "morganrdr@gmail.com"},
    {name: "Nathan Drake", email: "drakenathan@gmail.com"}
]

const title = document.getElementById("title")
const List = document.getElementById("tableList")

title.textContent = "Object inside array in a table"

for (i = 0; i < people.length; i++) {
    // userList.innerHTML += "<li>" + people[i].name + " " + people[i].email +"</li>"
    List.innerHTML += `<tr>
                            <td>${people[i].name}</td>
                            <td>${people[i].email}</td>
                        </tr>`
}