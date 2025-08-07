// Check if some elements in the array are numbers

let justNumbers = arr.some(function(el){
    return typeof el === 'number'
})

console.log(justNumbers)