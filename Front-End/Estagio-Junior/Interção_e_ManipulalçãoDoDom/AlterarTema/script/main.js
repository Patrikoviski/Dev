const buttonAlterar = document.querySelector(".alterar")
const body = document.querySelector("body")


buttonAlterar.addEventListener("click", () => {
    body.classList.toggle("dark")

    if (body.classList.contains("dark")) {
        buttonAlterar.textContent = "light theme"
        localStorage.setItem("dark")
    } else {
        buttonAlterar.textContent = "dark theme"
        localStorage.setItem("light")
    }
})