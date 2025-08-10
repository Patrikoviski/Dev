/* 
replace(),          replaceAll(),
indexOf(),          lastIndexOf(),      includes(),
slice(),            substring(),        split(),
toLowerCase(),      toUpperCase(),
valueOf(),
trim(),             trimEnd(),          trimStart(),
padStart(),         padEnd(),
startsWith(),       endsWith(),
charAt(),           charCodeAt()        length
*/


// replace()

let str1 = "section about strings"
let str2 = "    section about strings   "
let str3 = "abcdefgh"

console.log("---------------------")
console.log("replace(/i/g, 'o')")
console.log(str1)
console.log(str1.replace(/i/g, "o"))


// indexOf()

console.log("--------------------")
console.log("indexOf('strings') ")
console.log(str1.indexOf("strings"))


// includes()

console.log("--------------------")
console.log("includes('about')")
console.log(str1.includes("about"))


// slice()

console.log("--------------------")
console.log("slice(2, 5)")
console.log(str1.slice(2, 5))


// substring()

console.log("--------------------")
console.log("substring(2, 5)")
console.log(str1.substring(2, 5))


// toUpperCase()

console.log("--------------------")
console.log("toUpperCase()")
console.log(str1.toUpperCase())


// toLowerCase()

console.log("--------------------")
console.log("toLowerCase()")
console.log(str1.toLowerCase())


// valueOf()

console.log("--------------------")
console.log("valueOf()")
console.log(str1.valueOf())


// trim()

console.log("--------------------")
console.log("trim()")
console.log(str2)
console.log(str2.trim())


// trimEnd()

console.log("--------------------")
console.log("trimEnd()")
console.log(str2)
console.log(str2.trimEnd())


// trimStart

console.log("--------------------")
console.log("trimStart()")
console.log(str2)
console.log(str2.trimStart())


// padStart()

console.log("--------------------")
console.log("padStart()")
console.log(str1)
console.log(str1.padStart(40, "*"))



// padEnd()

console.log("--------------------")
console.log("padEnd()")
console.log(str1)
console.log(str1.padEnd(40, "*"))


// startsWith()

console.log("--------------------")
console.log("startsWith('section')")
console.log(str1)
console.log(str1.startsWith("section"))


// endsWith()

console.log("--------------------")
console.log("endsWith('section')")
console.log(str1)
console.log(str1.endsWith("section"))


// charAt()

console.log("--------------------")
console.log("charAt(1)")
console.log(str3)
console.log(str3.charAt(1))


// charCodeAt()

console.log("--------------------")
console.log("charCodeAt(1)")
console.log(str3)
console.log(str3.charCodeAt(1))