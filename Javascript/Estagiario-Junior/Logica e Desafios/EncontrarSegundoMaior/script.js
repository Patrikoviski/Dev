const numbers = [10, 2, 8, 4]

// const segundoMaior = (array) => [...array].sort((a, b) => b - a)

const segundoMaior = (array) => {
    const sortedArray = [...array].sort((a, b) => b - a)
    return sortedArray[1]
}

console.log(segundoMaior(numbers))