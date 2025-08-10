let phoneNumber = "91234-2345"
let phoneNumber2 = "1234-2345"
function maskarateNumber(number) {
    let hifemPosition = number.indexOf("-")
    let numberStart = number.slice(0, hifemPosition)
    let numberEnd = number.slice(hifemPosition + 1)
    let lastTwoNumbers = numberEnd.slice(-2)
    return `${numberStart[0].padEnd(numberStart.length, "*")}-${lastTwoNumbers.padStart(numberEnd.length, "*")}`
}

console.log(maskarateNumber(phoneNumber))
console.log(maskarateNumber(phoneNumber2))