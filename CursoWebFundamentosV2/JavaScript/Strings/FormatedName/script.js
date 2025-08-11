// function nameFormated(fullName) {
//     fullName = fullName
//     let spacePosition = fullName.trim().indexOf(" ")
//     let firstName = fullName.slice(0, spacePosition)
//     let lastName = fullName.slice(spacePosition)
//     return `${lastName}, ${firstName}`
// }


// console.log(nameFormated("Patrik Grodoviski"))



// Version with .split()

function nameFormated(fullName) {
    let arrName = fullName.split(" ")
    if (arrName.length == 1) {
        return fullName
    }
    let firstName = arrName.shift()
    return `${arrName.join(" ")}, ${firstName}`
}


console.log(nameFormated("Patrik Grodoviski"))