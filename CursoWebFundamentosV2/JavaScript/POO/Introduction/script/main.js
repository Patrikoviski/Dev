let dog = new Animal("mammal")
let cat = new Animal("mammal")
let snake = new Animal("reptile")
let fish = new Animal()

function Animal(type){
    // if(type) this.type = type
    type ? this.type = type : ""
}

Animal.prototype.getType = function(){
    return this.type
}

Animal.prototype.type = "unknow"