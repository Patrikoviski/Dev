const address = {
    street: "Avenue Street", 
    number: 5
}

const person = {
    name: "John", 
    lastName: "Marston",
    address
}

for (const prop in person) {
    document.writeln(person[prop])
}