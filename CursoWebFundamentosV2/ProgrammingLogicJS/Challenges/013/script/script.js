const number = prompt('Type anything: ')
alert(typeof number)

switch(typeof number) {
    case "number": {
        alert('number')
        break
    }
    case "string": {
        alert('string')
        break
    }
    case "boolean": {
        alert('boolean')
    }
}