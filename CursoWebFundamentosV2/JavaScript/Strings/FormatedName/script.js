function nameFormated(fullName) {
    fullName = fullName
    let spacePosition = fullName.trim().indexOf(" ")
    let firstName = fullName.slice(0, spacePosition)
    let lastName = fullName.slice(spacePosition)
    return `${lastName}, ${firstName}`
}


console.log(nameFormated("Patrik Grodoviski"))