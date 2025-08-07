// splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let arr = [1, 3, 5, 7, 9]

let arr2 = arr.splice(1, 3, "hello world")

console.log(arr)
console.log(arr2)