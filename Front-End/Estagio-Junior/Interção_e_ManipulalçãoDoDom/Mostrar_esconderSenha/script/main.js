const olho = document.querySelector(".fa-solid") /* Olho esconde / mostra senha */
const senha = document.getElementById("pass")


// Versao moderna

olho.addEventListener("click", () => {
    const isPassHidden = senha.getAttribute("type") === "password"

    senha.setAttribute("type", isPassHidden ? "text" : "password")

    olho.classList.toggle("fa-eye-slash")
    olho.classList.toggle("fa-eye")
})


// Versao antiga

// olho.addEventListener("click", () => {
//     if(olho.classList.contains("fa-eye-slash")){
//         senha.setAttribute("type", "text")
//         olho.classList.remove("fa-eye-slash")
//         olho.classList.add("fa-eye")
//     } else {
//         senha.setAttribute("type", "password")
//         olho.classList.remove("fa-eye")
//         olho.classList.add("fa-eye-slash")
//     }
// })