const numbers1 = [1, 2, 3, 4, 5, 6]
const numbers2= [7, 8, 9, 10]


function concatenar(array1, array2){
    let novoArray = array1.concat(...array2)
    return novoArray.toString()
}

console.log(concatenar(numbers1, numbers2)