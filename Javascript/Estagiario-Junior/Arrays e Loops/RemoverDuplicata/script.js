const numbers = [1, 1, 2, 2, 3, 3]

const removerDuplicata = (array) => [...new Set(array)]

// const removerDuplicata = (array) => {
//     const uniqueSet = new Set(array)
//     return [...uniqueSet]
// }

console.log(removerDuplicata(numbers))