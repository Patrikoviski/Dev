class Animal{
    constructor(type){
        this.type = type
    }
    
    getType(){
        return this.type
    }
}

class Cat extends Animal {
    constructor(name){
        super("mammal")
        this.name = name
    }
}

Animal.prototype.type = "unknow"

let animal = new Animal("amphibian")
let frog = new Animal()
let snow = new Cat("snow")

console.log(frog)
console.log(animal)
console.log(snow)



// ES5

// let dog = new Animal("mammal")
// let cat = new Animal("mammal")
// let snake = new Animal("reptile")
// let fish = new Animal()

// function Animal(type){
//     // if(type) this.type = type
//     type ? this.type = type : ""
// }

// Animal.prototype.getType = function(){
//     return this.type
// }

// Animal.prototype.type = "unknow"