function test(str, n){
    console.log(this.name)
    console.log(str, n)
}

console.log("call()")
test.call({name: "Toby"}, "Tobyas", 7)
console.log("-------------------")
console.log("aplly()")
test.apply({name: "john"}, ["marston", 40])
console.log("-------------------")
console.log("call() with spread operator")
test.call({name: "Toby"}, ...["Tobyas", 7])
console.log("-------------------")

console.log("bind()")
const test2 = test.bind({name: "snow"})
test2("abacaxi", 2)