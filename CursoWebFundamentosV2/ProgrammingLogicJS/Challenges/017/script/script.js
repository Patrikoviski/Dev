let number = parseInt(prompt('Type a integer number: '))
let result = 0

for (i = 0; i <= 100; i++) {
    result = number * i
    document.writeln(result)

    if (i % 10 == 0) {
        document.writeln('<br>' + '<hr>')
    }
}