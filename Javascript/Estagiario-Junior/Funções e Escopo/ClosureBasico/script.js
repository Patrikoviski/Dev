function externa(){
    let count = 0
    return function interna(parametro){
        console.log(parametro)
        count++
        return count
    }
}

const contador = externa()

console.log(contador("abacaxi"))
console.log(contador("banana"))
console.log(contador("morango"))