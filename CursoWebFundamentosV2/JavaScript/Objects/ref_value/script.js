let x = 10

function changeValue(n) {
    n++
    console.log('Inside changeValue:', n)
}

console.log('Before changeValue:', x)
changeValue(x)
console.log("--------------------")