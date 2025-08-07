// Nodelist is static 
// Collection is dinamic


let nodelist = document.querySelectorAll("#list li")
let collection = document.getElementById("list").getElementsByTagName("li")

console.log(nodelist)
console.log(collection)

document.querySelector("#list").innerHTML += "<li> item 6 </li>"

console.log(nodelist)
console.log(collection)

document.getElementById("list").innerHTML += "<li> item 7 </li>"

console.log(nodelist)
console.log(collection)

document.getElementById("list").innerHTML = ""

console.log(nodelist)
console.log(collection)