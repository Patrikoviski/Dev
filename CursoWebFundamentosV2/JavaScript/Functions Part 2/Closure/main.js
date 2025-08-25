const test = (function(n){
    return function internalTest(){
        // let n = 0
        console.log("call internalTest ", ++n)
        return "internalTest return " + n
    }
})(10)

let str = test()
test()
test()
let str2 = test()
console.log(str)
console.log(str2)