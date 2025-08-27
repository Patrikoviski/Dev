class Animal {
    constructor(type){
        if(this.constructor == Animal){
            throw new Error("Animal is an abstract class")
        }

        if(type){
            this.type = type
        }
    }

    eat(){
        throw new Error("Method 'eat() must be implemented")
    }
}

class Cat extends Animal {
    constructor(name){
        super("mammal")
        this.name = name
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
}

// const animal = new Animal("mammal") - Line 3 Error
const snow = new Cat("snow")

console.log(snow.eat())