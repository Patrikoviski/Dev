function bark() {
    console.log(this.name, "speak: woof woof")
}

function meow() {
    console.log(this.name, "speak: meow meow")
}

const dog = {
    name: "rex",
    // speak: bark
    speak(){
        console.log(this.name, "speak: woof woof")
    }
}

const cat = {
    name: "snow",
    speak: meow
}

dog.speak()
cat.speak()