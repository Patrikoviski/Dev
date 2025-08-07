function fn(cb) {
    console.log("Execute callback action")
    console.log(typeof cb)
    cb()
}

function callback() {
    console.log("function passed per parameter")
}

fn(callback) 

const obj = {
    callback
}

obj.callback()

function fn2(n1) {

    return function (n2) {
        return n1 * n2
    }
}

const fct2 = fn2(10)
const multiply = fct2(2)

console.log(multiply)

function fn3() {
    return function _fn3() {
        console.log("Function returned per parameter")
    }
}

const fct3 = fn3()
fct3()