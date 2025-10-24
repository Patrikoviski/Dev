const button = document.querySelector(".openModal")
const buttonFechar = document.getElementById("fecharModal")
const modal = document.getElementById("modal")


button.addEventListener("click", () => {
    modal.showModal()
})

buttonFechar.addEventListener("click", () => {
    modal.close()
})