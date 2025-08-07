window.sum = function () {
    const numbers = [...arguments]
    return numbers.reduce(function (sum, current) {
        return sum + current
    }, 0)
}

window.average = function () {
    const numbers = [...arguments]
    return window.sum(...numbers) / numbers.length
}