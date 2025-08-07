const arr = [1, 2, 3]
const obj = {
    name: 'Kamily',
    age: 25,
    email: 'gatinhadasilva@gmail.com'
}

for (let prop in obj) {
    console.log(prop, obj[prop]);
}

for (n of arr) {
    console.log(n);
}