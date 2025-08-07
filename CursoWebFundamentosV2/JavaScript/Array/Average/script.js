let numbers = [10, 20, 30, 40, 50]

function sum() {
    var total = 0
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

function average() {
    // var total = sum.apply(null, arguments)
    // return total / arguments.length

    return sum(...arguments) / arguments.length
}

console.log(sum(...numbers))
console.log(average(...numbers))