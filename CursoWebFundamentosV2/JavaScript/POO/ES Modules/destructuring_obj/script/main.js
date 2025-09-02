const arr = [1, 2, 4]

// with destructuring
const [n1, n2] = arr

// without destructuring
// const n1 = arr[0]
// const n2 = arr[1]

const people = {
    name: "Patrik",
    lastname: "Grodoviski",
    enterprise: "Avadakedavra"
}

const people2 = {
    name: "Jose",
    lastname: "Bezerra",
    age: 25
}

// without destructuring
// let enterprise = people.enterprise
// let name = people.name

// with destructuring
let {name: name, enterprise} = people

console.log(name)
console.log(enterprise)

let {name: name2, ...rest} = people2

console.log(name2)
console.log(rest)