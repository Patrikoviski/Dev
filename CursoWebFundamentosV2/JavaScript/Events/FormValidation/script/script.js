(function() {
    let button = document.querySelector(".btn")
    let checkbox = document.getElementById("check")
    

    function updateButtonState() {
        if (checkbox.checked) {
            button.disabled = false
            button.style = ""
        } else {
            button.disabled = true
            button.style.backgroundColor = "#ccc"
            button.style.cursor = "default"
        }
    }

    // Inicializa o estado do botão ao carregar a página
    updateButtonState()

    // Atualiza o estado do botão sempre que o checkbox mudar
    checkbox.addEventListener("change", updateButtonState)
})();