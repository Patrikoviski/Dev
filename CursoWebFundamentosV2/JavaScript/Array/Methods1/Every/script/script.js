const arr = [1, 5, 10, "hello", true]

// Check if every elements in the array are numbers
// Using the every() method

let justNumbers = arr.every(function(el){
    return typeof el === 'number'
})

console.log(justNumbers)