const person = {}

person.name = prompt('Name: ')
person.email = prompt('Email: ')

for (prop in person) {
    console.log(person[prop])
}