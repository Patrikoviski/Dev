const numbers = [1, 2, 3, 4, 5, 6]


const pares = (array) => array.filter(e => e % 2 === 0)

// function pares(array){
//     return array.filter(e => {
//         return e % 2 == 0
//     })
// }

console.log(pares(numbers))