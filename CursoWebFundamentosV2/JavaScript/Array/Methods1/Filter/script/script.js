// Using the filter() method to create a new array with only numbers

const arr1 = arr.filter(function(el, i, _arr){
    return typeof el === 'number'
})

console.log(arr1)