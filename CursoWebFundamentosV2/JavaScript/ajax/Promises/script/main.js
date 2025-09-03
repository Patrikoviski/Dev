console.log("start of code")


const promise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Success coming from Timeout")
        reject("Error coming from Timeout")
    }, 1000)
})

promise
    .then(answer => console.log(answer))
    .then(() => {
        console.log("new then chained")
        return "----------------"
    })
    .then((answer) => {
        console.log("new then chained 2", answer)
    })
    .catch(error => console.log(`Error: ${error}`))
    .finally(() => {
        console.log("finally always executed")
    })

console.log("end of code")