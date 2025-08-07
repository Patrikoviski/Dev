// find() method returns the value of the first element in the array that satisfies the provided testing function.

let arr = [4, 5, 10, 20, 35, 4, 5]
console.log(arr.find(function(el){
    return el > 10
}))