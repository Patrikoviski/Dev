const alternado = (str) => str.split('').map((char, index) => {
    return index % 2 === 0 ? char.toUpperCase() : char
}).join('')

console.log(alternado("javascript"))