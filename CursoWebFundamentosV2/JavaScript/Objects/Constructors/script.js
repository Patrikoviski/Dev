function Task(name) {
    "use strict"
    let _name = name
    this.createdAt = new Date()
    this.updatedAt = null
    this.changeName = function(newName) {
        if (newName) {
            _name = newName
            this.updatedAt = new Date()
        }
    }
    this.getName = function () {
        return _name
    }
}

let task = "name 1"
Task(task)
console.log(task)

const task1 = new Task("First task")
task1.changeName("Task updated")

const task2 = new Task("Second task")

console.log(task1)
console.log("------------------")
console.log(task2)
console.log("------------------")

task1.changeName("bom dia")
console.log(task1.getName())
console.log(task1)