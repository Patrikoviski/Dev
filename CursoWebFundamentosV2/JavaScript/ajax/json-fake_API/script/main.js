async function searchPostByUser(id){
    try {
        const answer = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        console.log(answer)
        console.log(answer.status)
    
        if(!answer.ok){
            throw Error("requisition error")
        }
    
        const data = await answer.json()
        showData(data)
    } catch(e) {
        alert(`Error: ${e}`)
    }

    
}

searchPostByUser(1)

function showData(data){
    console.log(data)
}