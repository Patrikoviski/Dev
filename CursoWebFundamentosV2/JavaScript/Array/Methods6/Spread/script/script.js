const arr = [1, 2, 3]

function sum() {
    console.log(arguments);
    console.log(arguments.length);
}

sum(1,2,3) 
sum(arr)
sum([1,2,3])

sum(...[1, 2, 3])
sum(...arr);

arr.push(...arr)
console.log(arr)