let dado1 = parseInt(Math.random() * 6 + 1)
let dado2 = parseInt(Math.random() * 6 + 1)
let count = 0

do{
    count++
    dado1 = parseInt(Math.random() * 6 + 1)
    dado2 = parseInt(Math.random() * 6 + 1)
}
while(dado1 !== dado2)
    
document.write(dado1 + ' | ' + dado2)
document.write(' Total of plays: ' + count)