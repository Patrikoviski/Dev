;(function() {
    'use strict'

    let newTaskInput = document.getElementById("item-input")
    let addBtn = document.getElementById("add-item")
    let taskList = document.getElementById("todo-list")
    let container = document.querySelectorAll(".todo-list__container")
    
    // Lista de tarefas baseada em um array de objetos
    let arrTasks = getSavedData()

    // Mapeamento das ações

    const actions = {
        'fa-trash-alt': removeTask,
        'button-check': toggleCheckAction,
        'fa-edit': startEditAction,
        'editButton': saveEditAction,
        'cancelButton': cancelEditAction,
    };

    function getSavedData() {
        let tasksData = localStorage.getItem("tasks");
        
        // Se o localStorage retornar null, a linha abaixo usa "[]"
        // para que JSON.parse() retorne um array vazio
        let parsedTasks = JSON.parse(tasksData ?? "[]");
        return parsedTasks;
    }  

    function setNewData() {
        localStorage.setItem("tasks", JSON.stringify(arrTasks))
    }

    setNewData();

    // Função para gerar Li's

    function generateLiTask(task, index){
        const newLi = document.createElement("li")
        newLi.className = "todo-item"
        newLi.dataset.index = index // Adiciona um índice para referência

        newLi.innerHTML = `
            <button class="button-check">
            <i class="fas fa-check ${task.completed ? '' : 'displayNone'}"></i>
            </button>
            <p class="task-name" style="${task.completed ? 'text-decoration: line-through; filter: blur(.8px);' : ''}">${task.name}</p>
            <i class="fas fa-edit ${task.completed ? 'disabled-edit' : ''}"></i>
            <div class="editContainer" style="display:none;">
                <input type="text" class="editInput" placeholder="Edit task...">
                <button class="editButton">Edit</button>
                <button class="cancelButton">Cancel</button>
            </div>
            <i class="fas fa-trash-alt"></i>
        `
        return newLi
    }

    // Função para renderizar as tarefas na tela

    function renderTasks() {
        taskList.innerHTML = "" // Limpa a lista
        
        arrTasks.forEach((task, index) => {
            const liElement = generateLiTask(task, index)
            
            taskList.appendChild(liElement)
        })

        // Chama a função para ajustar o padding após renderizar
        adjustContainerPadding()
    }

    // Função para adicionar uma nova tarefa

    function addTask(taskName) {
        if (taskName) {
            arrTasks.push({
                name: taskName,
                createAt: Date.now(),
                completed: false
            })
            renderTasks()
            setNewData()
        }
    }

    // Função para remover uma tarefa

    function removeTask(undefined, index, target) {
        arrTasks.splice(index, 1)
        renderTasks()
        setNewData()
    }

    // Função para alternar o estado de conclusão de uma tarefa

    function toggleCheckAction(parentLi, index, target) {
        arrTasks[index].completed = !arrTasks[index].completed
        renderTasks()
        setNewData()
    }

    // Função para iniciar a edição de uma tarefa

    function startEditAction(parentLi, index, target) {
        const editContainer = parentLi.querySelector(".editContainer")
        editContainer.style.display = "flex"

        const allEditButtons = taskList.querySelectorAll(".fa-edit")
        allEditButtons.forEach(button => {
            if (button !== target) {
                button.classList.add("disabled-edit")
            }
        })

        const editInput = editContainer.querySelector(".editInput")
        editInput.value = arrTasks[index].name
        editInput.focus()
    }

    // Função para salvar a edição de uma tarefa

    function saveEditAction(parentLi, index) {
        const editInput = parentLi.querySelector(".editInput")
        arrTasks[index].name = editInput.value
        renderTasks()
        setNewData()
    }

    // Função para cancelar a edição de uma tarefa

    function cancelEditAction(parentLi) {
        const editContainer = parentLi.querySelector(".editContainer")
        editContainer.style.display = "none"

        // input = parentLi.querySelector(".editInput").value = arrTasks[index].name
    }
    
    // Função para ajustar o padding do container

    function adjustContainerPadding() {
        if (arrTasks.length === 0) {
            container.forEach(element => element.style.padding = "0")
            console.log(arrTasks.length)
        } else {
            container.forEach(element => element.style.padding = "2rem")
            console.log(arrTasks.length)
        }
    }

    // Evento de clique para adicionar um novo item

    addBtn.addEventListener("click", function(e) {
        e.preventDefault()
        addTask(newTaskInput.value)
        newTaskInput.value = ""
        newTaskInput.focus()
    })

    // Delegação de eventos no elemento pai para lidar com cliques nos filhos
    
    taskList.addEventListener("click", function(e) {
        const target = e.target
        const parentLi = target.closest("li")
        
        if (!parentLi) return
        
        if (target.classList.contains("disabled-edit")) return
        
        const index = parentLi.dataset.index
        const task = arrTasks[index]

        if (task.completed && target.classList.contains("fa-edit")) return

        // Encontra a classe de ação

        let actionClass = ''
        for (const key in actions) {
            if (target.classList.contains(key) || target.closest(`.${key}`)) {
                actionClass = key
                break
            }
        }

        // Se uma ação for encontrada, execute a função correspondente

        if (actionClass && typeof actions[actionClass] === 'function') {
            actions[actionClass](parentLi, index, target)
        }
    })

    // Renderiza as tarefas iniciais (se houver alguma)
    renderTasks()

})()