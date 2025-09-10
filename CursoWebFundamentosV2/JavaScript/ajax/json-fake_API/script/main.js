// let title = document.getElementById("title")
// let body = document.getElementById("body")

document.querySelector("#registerForm").addEventListener("submit", function(evt){
    evt.preventDefault()

    postRegister(1)
})

// Get

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

// Post

async function postRegister(userID){
    try {
        const answer = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: document.querySelector("#title").value,
                body: document.querySelector("#body").value,
                userID
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF=8',
            },
        })

        console.log(answer)
        console.log(answer.status)

        const data = await answer.json()
        showData(data)

    } catch(e){
        alert(`Error: ${e}`)
    }
}