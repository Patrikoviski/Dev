function Animal(type){
    // if(type) this.type = type
    type ? this.type = type : ""
}


function Dog(name, type){
    this.name = name
    Animal.call(this, type)
    // this.constructor = Dog
    Object.defineProperty(Dog.prototype, "constructor", {
        value: Dog,
        enumerable: false
    })
}


Animal.prototype.getType = function(){
    return this.type
}

Dog.prototype = new Animal()
let rex = new Dog("rex", "mammal")

Animal.prototype.type = "unknow"

console.log(rex)

for (let prop in rex){
    if (rex.hasOwnProperty(prop)){
        console.log(prop)
    }
}

console.log(rex instanceof Animal)