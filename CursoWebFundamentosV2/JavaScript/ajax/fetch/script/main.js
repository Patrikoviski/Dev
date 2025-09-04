console.log("start of code")


function showData(data){
    const list = document.querySelector("#list")
    let result = ""

    data.forEach(data => {
        console.log(data)
        result += `<li> Name: ${data.name}, email: ${data.email}</li>`
    })

    list.innerHTML = result
}

fetch("./json/data.json") 
    .then( answer => {
        if(!answer.ok){
            throw Error("requisition error")
        }
        return answer.json()
    })
    .then( data => {
        console.log(data)
        showData(data)
    })
    .catch(error => console.error(`Error: ${error}`))

console.log("end of code")