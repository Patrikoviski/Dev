function changeName(name) {
    this.name = name
    this.updatedAt = newDate()
}

const task1 = {
    name: "task 1",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName
}

const task2 = {
    name: "task 2",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName
}

task1.name = "task 1 updated"
task1.updatedAt = new Date()

console.log(task1)
console.log(task2)