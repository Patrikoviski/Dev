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

async function dataSearch(){
    console.log("start of dataSearch")
    try {
        const answer = await fetch("./json/data.json")
        if(!answer.ok){
            throw Error("requisition error")
        }
        const data = await answer.json()
        console.log(data)
        showData(data)
    } catch(e){
        console.log(`Error: ${e}`)
    }


    console.log("end of dataSearch")
}

dataSearch()

console.log("end of code")