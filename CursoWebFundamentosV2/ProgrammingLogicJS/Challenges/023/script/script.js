for (i = 1004; i <= 2025; i += 4) {

    let bisix = i % 100 != 0 || i % 400 == 0

    if (bisix) {
        document.write('Bisix year: ' + i)
    }
    else {
        document.writeln('Not a bisix year: ' + i)
    }
    
}