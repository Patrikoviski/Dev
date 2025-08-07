let numbers = [4, 8, 1, 0, 4, 23, 98, 9, 100, 7]
let numbers2 = []

for (i = 0; i < numbers.length; i++) {
    let number = numbers[i] * 2

    numbers2.push(number)
}

document.writeln(numbers2)