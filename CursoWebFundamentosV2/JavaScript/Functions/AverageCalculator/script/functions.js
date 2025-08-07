function averageCalculator() {
    let result = 0
    for (i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") {
            throw new Error("You just can type numbers")
        }
        result += arguments[i]
        // else {
        //     for (i = 0; i < arguments.length; i++) {
        //         result += arguments[i]
        //     }
        //     result /= arguments.length
        //     return result
        // }
    }
    return (result / arguments.length) || 0
} 

console.log(averageCalculator(5, 8, 10).toFixed(1))