(function(){
    let newTaskInput = document.getElementById("item-input")
    let addBtn = document.getElementById("add-item")
    let taskList = document.getElementById("todo-list")
    let lis = taskList.getElementsByTagName("li")
    let trashIcons = document.querySelectorAll(".fa-trash-alt")
    let container = document.querySelectorAll(".todo-list__container")

    let arrTasks = [
        {

        }
    ]

    function listLength(lis){
        if (lis.length === 0) {
            container.forEach(element => {
                element.style.padding = "0";
            });
        }
    }

    function generateLiTask(obj) {
        let newCheckButton = document.createElement("button")
        let newLi = document.createElement("li")
        let pList = document.createElement("p")
        let iElementCheck = document.createElement("i")
        let iElementEdit = document.createElement("i")
        let iElementTrash = document.createElement("i")

        newCheckButton.className = "button-check"
        newLi.className = "todo-item"
        pList.className = "task-name"
        iElementCheck.className = "fas fa-check displayNone"
        iElementEdit.className = "fas fa-edit"
        iElementTrash.className = "fas fa-trash-alt"
        pList.textContent = obj.name
        return newLi
    }

    function renderTasks(){
        taskList.innerHTML = ""
        arrTasks.forEach(task => {
            taskList.appendChild(generateLiTask(task))
        })
    }

    function addTask(task) {
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false
        })
    }

    listLength(lis)

    // Adiciona item na lista

    addBtn.addEventListener("click", function(e){
        e.preventDefault()


        // taskList.appendChild(newLi)
        // newLi.appendChild(newCheckButton)
        // newCheckButton.appendChild(iElementCheck)
        // newLi.appendChild(pList)
        // newLi.appendChild(iElementEdit)
        // newLi.appendChild(iElementTrash)

        addTask(newTaskInput.value)
        renderTasks()



        if (lis.length > 0) {
            container.forEach(element => {
                element.style.padding = "2rem";
            });
        }

        // Remove item da lista

        iElementTrash.addEventListener("click", function(){
            newLi.remove()

            listLength(lis)
        })
        newTaskInput.value = ""
        newTaskInput.focus()
    })

    trashIcons.forEach(function(icon) {
        icon.addEventListener("click", function() {
            icon.parentElement.remove()
        })
    })

    document.addEventListener("change", function(e) {
        if (e.target.classList.contains("button-check")) {
            let checkIcon = e.target.querySelector(".fa-check")
            if (checkIcon) {
                checkIcon.classList.remove("displayNone")
            }
        }
    });

    [...lis].forEach(element => {
        element.addEventListener("click", function(){
            console.log(this)
        })
    })
})()