function Task(name) {
    this.name = name
    this.createdAt = new Date()
    this.changeName = function(newName) {
        this.name = newName
    }
}

const task1 = new Task()
task1.changeName()
console.log(task1)