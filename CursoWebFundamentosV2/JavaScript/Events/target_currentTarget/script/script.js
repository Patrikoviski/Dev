let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

// Event Handler DOM Level 0 

function clicked() {
    console.log("click function clicked")
}

btn1.onclick = function() {
    console.log("click btn1 function anonimy")
}

btn1.onclick = clicked

// Event Handler DOM Level 2

btn2.addEventListener("click", clicked)
btn2.addEventListener("click", function(){
    console.log("click anonimy function")
})


document.addEventListener("click", function(e){
    console.log("document clicked")
    console.log(e.target)
    console.log(e.currentTarget)
    console.log(this)
})

btn3.addEventListener("click", function(e){
    e.stopPropagation()
    console.log("btn3 clicked")
})




let container = document.getElementById("container")
container.addEventListener("click", function(){
    console.log("container clicked")
})





// Event Delegation

let container2 = document.querySelector(".container2")
let btns = document.querySelectorAll(".container2 button");

// [...btns].forEach(btn => {
//     btn.addEventListener("click", function(e){
//         e.stopPropagation()
//         console.log(e.target)
//     })
// })

container2.addEventListener("click", function(e){
    // e.stopPropagation()
    console.log(e.target)
    console.log(e.currentTarget)
    console.log(this)
    if(e.target.nodeName == "button".toUpperCase()){
        // console.log(e.target)
    }
})