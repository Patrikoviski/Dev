; (function () {
    "use strict"


	function Task(name, completed, createdAt, updatedAt){

        let _name = name
        this.completed = completed || false,
        this.createAt = createdAt || Date.now()
        
        this.getName = function () {
            if (typeof name == 'string') {
                return _name
            }
        }
        this.setName = function (newName) {
            if (typeof newName == 'string') {
                _name = newName
                this.updatedAt = Date.now()
            }
        }


        this.toggleDone = function () {
            this.completed = !this.completed
        }
	}

	let arrTasks = []

	const arrInstancesTasks = arrTasks.map(task => {
        const {name, completed, createdAt, updatedAt} = task
        return new Task(name, completed, createdAt, updatedAt)
    })
    console.log(arrInstancesTasks)



    //ARMAZENAR O DOM EM VARIAVEIS
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")
    const lis = ul.getElementsByTagName("li")
    const container = document.getElementsByClassName("todo-list__container")


    function generateLiTask(obj) {

        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkButton = document.createElement("button")
        const editButton = document.createElement("i")
        const deleteButton = document.createElement("i")

        li.className = "todo-item"

        checkButton.className = "button-check"
        checkButton.innerHTML = `
            <i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action="checkButton"></i>`
        checkButton.setAttribute("data-action", "checkButton")

        li.appendChild(checkButton)

        p.className = "task-name"
        p.textContent = obj.getName()
        li.appendChild(p)

        editButton.className = "fas fa-edit"
        editButton.setAttribute("data-action", "editButton")
        li.appendChild(editButton)


        const containerEdit = document.createElement("div")
        containerEdit.className = "editContainer"
        const inputEdit = document.createElement("input")
        inputEdit.setAttribute("type", "text")
        inputEdit.className = "editInput"
        inputEdit.value = obj.getName()

        containerEdit.appendChild(inputEdit)
        const containerEditButton = document.createElement("button")
        containerEditButton.className = "editButton"
        containerEditButton.textContent = "Edit"
        containerEditButton.setAttribute("data-action", "containerEditButton")
        containerEdit.appendChild(containerEditButton)
        const containerCancelButton = document.createElement("button")
        containerCancelButton.className = "cancelButton"
        containerCancelButton.textContent = "Cancel"
        containerCancelButton.setAttribute("data-action", "containerCancelButton")
        containerEdit.appendChild(containerCancelButton)

        li.appendChild(containerEdit)



        deleteButton.className = "fas fa-trash-alt"
        deleteButton.setAttribute("data-action", "deleteButton")
        li.appendChild(deleteButton)

        return li
    }

    function adjustContainerPadding() {
        const container = document.getElementsByClassName("todo-list__container");
        const containerArray = Array.from(container);

        if (arrInstancesTasks.length === 0) {
            containerArray.forEach(element => element.style.padding = "0");
        } else {
            containerArray.forEach(element => element.style.padding = "2rem");
        }
    }

    function renderTasks() {
        ul.innerHTML = ""
        arrInstancesTasks.forEach(taskObj => {
            ul.appendChild(generateLiTask(taskObj))
        });
        adjustContainerPadding()
    }

    function addTask(taskName) {
        arrInstancesTasks.push(new Task(taskName))
        renderTasks()
    }


    function clickedUl(e) {
        const dataAction = e.target.getAttribute("data-action")
        console.log(e.target)
        if (!dataAction) return

        let currentLi = e.target
        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement
        }
        const currentLiIndex = [...lis].indexOf(currentLi)

        const actions = {
            editButton: function () {
                const editContainer = currentLi.querySelector(".editContainer");

                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                });

                editContainer.style.display = "flex";


            },
            deleteButton: function () {
                arrInstancesTasks.splice(currentLiIndex, 1)
                renderTasks()

            },
            containerEditButton: function () {
                const val = currentLi.querySelector(".editInput").value
                arrInstancesTasks[currentLiIndex].setName(val)
                renderTasks()
            },
            containerCancelButton: function () {
                currentLi.querySelector(".editContainer").removeAttribute("style")
                currentLi.querySelector(".editInput").value = arrInstancesTasks[currentLiIndex].getName()
            },
            checkButton: function () {

                arrInstancesTasks[currentLiIndex].toggleDone()

	            renderTasks()
            }
        }

        if (actions[dataAction]) {
            actions[dataAction]()
        }
    }

    todoAddForm.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log(itemInput.value)
        addTask(itemInput.value)
        renderTasks()

        itemInput.value = ""
        itemInput.focus()
    });

    ul.addEventListener("click", clickedUl)

    renderTasks()

})();