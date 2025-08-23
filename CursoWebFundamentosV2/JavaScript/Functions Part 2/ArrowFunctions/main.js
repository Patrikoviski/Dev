function test(){
    console.log("function expression test")
    return "fn expression"
}

let t1 = test()
console.log(t1)


let arrowTest = str => `arrow function return - ${str}`



let t2 = arrowTest("parameter to arrow fn")
console.log(t2)

// let arrowTest3 = () => {
//     console.log("call arrow test 3")
//     return {
//         foo: "bar"
//     }
// }

let arrowTest3 = () => ({ foo: "bar" })


let t3 = arrowTest3()
console.log(t3)
console.log(t3.foo)