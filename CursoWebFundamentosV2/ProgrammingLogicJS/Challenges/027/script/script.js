let numbers = [5, 2, 7, 11, 4, 8, 9, 41]
let total = 0

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        total += numbers[i]
    }
}

document.writeln(total)