const str = "global string"

function test(str){
    console.log("---------------- this")
    console.log(this)
    console.log(str)

    setTimeout(function(){
        console.log("----------------")
        console.log(this)
    }, 2000)
}

const test2 = () => {
    console.log("arrow function")
    console.log(this)
}

test2()

test("parameter")

const obj = {
    foo: "bar",
    test,
    test2
}

obj.test()
obj.test2()