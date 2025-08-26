const rex = createDog("rex")
const toto = createDog("toto")

function createDog(name){
    let position = 0
    return {
        name,
        bark(){
            console.log(`${this.name} is barking!`)
        },
        walk(distance){
            position += distance
            if(distance < 0){
                console.log(`${this.name} back ${distance}m`)
            }
            else {
                console.log(`${this.name} walk ${distance}m`)
            }
            return this
        },
        get getPosition(){
            console.log(`Actual ${this.name} position is ${position}`)
            return position
        }
    }
}

console.log("-----------------------")
rex.walk(10).walk(5).getPosition
console.log("-----------------------")
toto.walk(20).walk(-3).walk(-17).getPosition
console.log("-----------------------")