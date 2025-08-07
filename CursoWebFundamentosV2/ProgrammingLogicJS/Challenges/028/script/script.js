let numbers = [5, 2, 7, 11, null, undefined, NaN, 4, 8, 9, 41]
let find = false

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] == null || numbers[i] == undefined || numbers[i == NaN]) {
        find = true
        break
    }
}

if (find == true) {
    document.writeln("i found null, undefined or NaN at the list")
}