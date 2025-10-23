const contar = document.getElementById("contar")
const adicionar = document.querySelector(".adicionar")
const remover = document.querySelector(".remover")
let count = 0


contar.addEventListener("toggle", adicionar, remover)

adicionar.addEventListener("click", () => {
    count++
    contar.textContent = count
})

remover.addEventListener("click", () => {

    count > 0 ? count-- : count = 0
    contar.textContent = count
})