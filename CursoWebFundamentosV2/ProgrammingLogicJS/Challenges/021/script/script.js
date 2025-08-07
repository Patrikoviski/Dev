
let count = 0
let totalCount = 0
let result = 0

do {
    let dado1 = parseInt(Math.random() * 6) + 1
    let dado2 = parseInt(Math.random() * 6) + 1
    totalCount++
    if (dado1 == dado2) {
        console.log(dado1 + ' ' + dado2)
        totalCount--
    }
    result = dado1 + dado2
    if (result % 2 == 0) {
        count++
    }

    document.writeln(result)

} while (count <= 10)

document.writeln('Total of plays: ' + totalCount)