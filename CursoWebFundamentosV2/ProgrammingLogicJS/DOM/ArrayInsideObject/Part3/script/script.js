// const alunos = [
//             { nome: "Kamily", notas: [10, 9, 8, 8] },
//             { nome: "Patrik", notas: [6, 7, 9, 8] },
//             { nome: "John", notas: [10, 6, 3, 0] },
//         ]



//         const listaAlunos = document.getElementById("taskList")
//         let alunosHTML = ""

//         for (let i = 0; i < alunos.length; i++) {
//             alunosHTML += "<li>" + alunos[i].nome + ", média: "
//             let soma = 0
//             for (let j = 0; j < alunos[i].notas.length; j++) {
//                 console.log("i:", i, "j:", j)
//                 soma += alunos[i].notas[j]
//             }
//             let media = soma / alunos[i].notas.length
//             alunosHTML += media + "</li>"
//         }
//         listaAlunos.innerHTML = alunosHTML



const student = [
    { name: "Kamily", notes: [10, 7, 9, 8]},
    { name: "Patrik", notes: [6, 7, 8, 6]},
    { name: "John", notes: [1, 3, 3, 8]}
]

const list = document.getElementById("taskList")
let html = ""
let title = document.getElementById("title")
let paragraph = document.getElementById("paragraph")
let userInput = document.getElementById("user")


title.innerHTML = "Data from a student"
userInput.placeholder = "Type here"

// for (i = 0; i < student.length; i++) {
//     html += "<li>" + student[i].name + "average: "
//     let total = 0
//     for (j = 0; j < student[i].notes.length; j++) {
//         total += student[i].notes[j]
//     }
//     let average = total / student[i].notes.length
//     html += average + "</li>"
// }

for (i = 0; i < student.length; i++) {
    html += `<li> ${student[i].name} <br> average: `
    let total = 0
    for (j = 0; j < student[i].notes.length; j++) {
        total += student[i].notes[j]
        
    }
    let average = total / student[i].notes.length
    html += `${average} </li>`
}

list.innerHTML = html