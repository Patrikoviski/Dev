class Dog{
    constructor(name){
        this.name = name
        Dog.drink()
    }

    static eat(){
        console.log(`${this.name} is eating!`)
        this.drink()
    }

    static drink(){
        console.log(`${this.name} is drinking!`)
    }
}

const toby = new Dog("Toby")