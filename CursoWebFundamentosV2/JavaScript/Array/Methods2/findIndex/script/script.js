// findIndex() gets the index of the first element that satisfies the provided testing function.

let arr = [4, 5, 10, 20, 35, 4, 5]
console.log(arr.findIndex(function(el){
    return el > 10
    
}))