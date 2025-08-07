let object = {name: "kamily", email: "gatinhadasilva@gmail.com"}
let span = document.getElementById("span")
let title = document.getElementById("title")
let paragraph = document.getElementById("paragraph")


// object = null

try {
    document.getElementById("paragraph").innerHTML =  `Name: ${object.name} <br> Email: ${object.email}`
} catch(e) {
    console.log(e)
    console.log(e.message)
    alert(`Algo deu errado, tente novamente  ${e.message}`)
} finally {
    alert("end of program")
}


title.innerHTML = "TryCatch"