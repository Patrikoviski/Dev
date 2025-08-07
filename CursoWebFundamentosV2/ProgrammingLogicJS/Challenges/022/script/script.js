for (i = 0; i <= 100; i++) {
    if (i % 10 == 0) {
        continue
    }
    document.writeln(i)

    let number = parseInt(Math.random() * 100) + 1

    if (i % number == 0) {
        document.writeln('<br>' + i + ' | ' + number)
        break
    }
}