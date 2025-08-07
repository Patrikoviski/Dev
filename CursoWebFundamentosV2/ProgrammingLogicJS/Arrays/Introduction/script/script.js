let names = ["John" , "Mary", "Denis", "Beatriz"]
let name = prompt('Type your name: ')

names[names.length] = name

for (i = 0; i < names.length; i++) {
    document.writeln(names[i])
}

document.writeln('<br>has ' + names.length + ' names in the list')