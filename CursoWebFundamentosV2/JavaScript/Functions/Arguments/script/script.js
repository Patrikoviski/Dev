let title = document.getElementById("title")


function some() {
    console.log(arguments)
    let total = 0
    for (i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

console.log(some(1, 2, 3))
console.log(some(1, 2, 3, 4, 5))
console.log(some(1, 2, 3, 4, 5, 12, 14, 50))

title.innerHTML = "Arguments"