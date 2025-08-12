function getRandomNumber(start, end, integer = true) {
    if(integer) {
        return Math.floor(Math.random() * (end - start + 1) + start)
    }
    else {
        return Math.random() * (end - start + 1) + start
    }
}

console.log(getRandomNumber(90, 100))