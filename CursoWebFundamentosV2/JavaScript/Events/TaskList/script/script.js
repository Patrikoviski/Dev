;(function() {
    'use strict'

    let newTaskInput = document.getElementById("item-input")
    let addBtn = document.getElementById("add-item")
    let taskList = document.getElementById("todo-list")
    let container = document.querySelectorAll(".todo-list__container")
    
    // Lista de tarefas baseada em um array de objetos
    let arrTasks = []


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
        }
    }

    // Função para remover uma tarefa

    function removeTask(index) {
        arrTasks.splice(index, 1)
        renderTasks()
    }
    
    // Função para ajustar o padding do container

    function adjustContainerPadding() {
        if (arrTasks.length === 0) {
            container.forEach(element => element.style.padding = "0")
        } else {
            container.forEach(element => element.style.padding = "2rem")
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
        
        const index = parentLi.dataset.index

        // Verifica primeiro se a tarefa está completa e é uma tentativa de edição
        if (arrTasks[index].completed && target.classList.contains("fa-edit")) {
            return
        }

        if (target.classList.contains("fa-trash-alt")) {
            removeTask(index)

        } else if (target.classList.contains("button-check") || target.closest(".button-check")) {

            // Lógica para marcar como completa
            
            arrTasks[index].completed = !arrTasks[index].completed
            renderTasks()

        } else if (target.classList.contains("fa-edit")) {

            // Exibe o container de edição

            const editContainer = parentLi.querySelector(".editContainer")
            editContainer.style.display = "flex"
            const editInput = editContainer.querySelector(".editInput")
            editInput.value = arrTasks[index].name
            editInput.focus()

        } else if (target.classList.contains("editButton")) {

            // Edita a tarefa

            const editInput = parentLi.querySelector(".editInput")
            arrTasks[index].name = editInput.value
            renderTasks()

        } else if (target.classList.contains("cancelButton")) {

            // Cancela a edição

            const editContainer = parentLi.querySelector(".editContainer")
            editContainer.style.display = "none"

        }
    })

    // Renderiza as tarefas iniciais (se houver alguma)
    renderTasks()



    /* CÓDIGO ANTERIOR E EVOLUÇÃO - Mantido para estudo
    
    PRIMEIRA VERSÃO:
    // Este código foi substituído pela delegação de eventos acima
    // O problema deste código é que ele adicionava listeners em elementos que são recriados
    // toda vez que renderTasks() é chamado, fazendo com que os eventos não funcionassem
    
    const editContainer = document.querySelectorAll(".editContainer")

    editContainer.forEach(container => {
        container.addEventListener("click", function(e) {
            const target = e.target
            const parentLi = target.closest("li")
            
            if (!parentLi) return
            
            const index = parentLi.dataset.index

            if (target.classList.contains("fa-edit")) {
                // Exibe o container de edição
                const editContainer = parentLi.querySelector(".editContainer")
                editContainer.style.display = "flex"
                const editInput = editContainer.querySelector(".editInput")
                editInput.value = arrTasks[index].name
                editInput.focus()

            } else if (target.classList.contains("editButton")) {
                // Edita a tarefa
                const editInput = parentLi.querySelector(".editInput")
                arrTasks[index].name = editInput.value
                renderTasks()

            } else if (target.classList.contains("cancelButton")) {
                // Cancela a edição
                const editContainer = parentLi.querySelector(".editContainer")
                editContainer.style.display = "none"

            } else if (target.classList.contains("button-check") || target.closest(".button-check")) {
                // Lógica para marcar como completa
                arrTasks[index].completed = !arrTasks[index].completed
                renderTasks()
            }
        })
    })

    MELHORIAS IMPLEMENTADAS:
    1. Delegação de eventos:
       - Removido o forEach e listeners individuais
       - Adicionado um único listener no elemento pai (taskList)
       - Melhor performance e manutenção do código

    2. Tratamento de tarefas completadas:
       - Adicionada verificação prévia se a tarefa está completa
       - Adicionada classe disabled-edit direto na geração do HTML
       - Feedback visual com CSS para tarefas completadas

    3. Organização do código:
       - Verificações de estado no início do listener
       - Lógica de apresentação movida para função generateLiTask
       - Separação clara entre lógica de estado e apresentação

    4. CSS necessário para as melhorias:
       .disabled-edit {
           pointer-events: none;
           cursor: not-allowed;
           opacity: 0.5;
       }
    */
})()