const rex = new Dog("rex")
const toto = new Dog("toto")

function Dog(name){
    let position = 0
    this.name = name,
    this.bark = function(){
        console.log(`${this.name} is barking!`)
    }
    this.walk = function(distance){
        position += distance
        console.log(`${this.name} walk ${distance} m`)
        console.log(`Actual position is ${position} m`)
    }
}

rex.bark()
rex.walk(5)
console.log("----------------")
toto.bark()