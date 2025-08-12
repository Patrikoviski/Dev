/*
    getDay()        getDate()       getMounth()     getFullYear()
    toString()      toLocationString()      toUTCString()
    setDay()        setDate()       setMounth()     setFullYear()
*/

const date = new Date()

console.log(".getDay()")
console.log("Sun = 0 | Mon = 1 | Tue = 2 | Wed = 3 | Thurs = 4 | Fri = 5 | Sat = 6")
console.log(date.getDay())
console.log("-----------------")

console.log(".getDate()")
console.log(date.getDate())
console.log("-----------------")

console.log(".getMonth()")
console.log(date.getMonth())
console.log("-----------------")

console.log(".getTime()")
console.log(date.getTime())
console.log("-----------------")

console.log(".getFullYear()")
console.log(date.getFullYear())
console.log("-----------------")

console.log(".getHours()")
console.log(date.getHours())
console.log("-----------------")

console.log(".getUTCHours()")
console.log(date.getUTCHours())
console.log("-----------------")

console.log(".getTimezoneOffset()")
console.log(date.getTimezoneOffset())
console.log("-----------------")


console.log(".setDate()")
date.setDate(11)
console.log(date.toString())
console.log("-----------------")

console.log(".setFullYear()")
date.setFullYear(2027)
console.log(date.toString())
console.log("-----------------")

console.log(".setTime()")
date.setTime(0)
console.log(date.toString())
console.log("-----------------")

console.log(".toDateString()")
console.log(date.toDateString())
console.log("-----------------")

console.log(".toISOString()")
console.log(date.toISOString())
console.log("-----------------")

console.log(".toLocaleDateString()")
console.log(date.toLocaleDateString())
console.log("-----------------")

console.log(".toLocaleString()")
console.log(date.toLocaleString())
console.log("-----------------")

console.log(".toUTCString()")
console.log(date.toUTCString())
console.log("-----------------")

console.log("Date.UTC(2025, 7, 12)")
console.log(Date.UTC(2025, 7, 12))
console.log("-----------------")

console.log("Date.now()")
console.log(Date.now())
console.log("-----------------")

