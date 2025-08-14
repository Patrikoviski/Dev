let number = 0
let str = ""
var doc = document.querySelector("div")
const startTime = Date.now()

setTimeout(function(){
    console.log("timeout after 2000ms")
    const finalTime = Date.now()
    console.log(finalTime - startTime)
}, 2000)


const interval = setInterval(function(){
    console.log(`interval number: ${number++}`)
    if (number > 15) {
        clearInterval(interval)
    }
}, 1000)