// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

let arr = [1, 3, 5, 7, 9]

let = result = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
})

console.log(result)

const names = [ 'Kamily <3' , 'Patrik', 'Arthur Morgan', 'John marston']

let ordenedNames = names.reduce(function (names, currentName) {
    let firstLetter = currentName[0]
    if (names[firstLetter]) {
        names[firstLetter]++
    } else {
        names[firstLetter] = 1
    }
    return names
}, {})

console.log(ordenedNames)

const numbers = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
const uniqueNumbers = numbers.reduce(function (accumulator, currentValue) {
    if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue)
    }
    return accumulator
}, [])

console.log(uniqueNumbers)