let number = parseInt(prompt('Type a integer number: '))
let count = 0
let result = 0

while (count < 10) {
    count += 1

    result = number * count
    document.write(number + ' * ' + count + ' = ' + result)
    
}