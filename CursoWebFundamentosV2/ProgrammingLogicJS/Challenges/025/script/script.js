let numbers = [2, 31, 0, "9", 12, "any text", 98, false, [], null]
let total = 0

for (i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] == "number") {
        total += numbers[i]
    }
}

document.writeln(total)