const vogals = ["a", "e", "i", "o", "u"]
function isVogal(letter){
   const isVogal = vogals.some(v => v === letter.toLowerCase())
   return isVogal ? "Vogal" : "Consoante"
}

console.log("A é:")
console.log(isVogal("a"))
console.log("B é:")
console.log(isVogal("b"))