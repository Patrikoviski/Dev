const address = {
    street: "Avenue Street", 
    number: 5
}

const person = {
    name: "John", 
    lastName: "Marston",
    address
}


document.writeln(`${person.name} lives in ${person.address.street}, ${person.address.number}`)