const body = document.querySelector("body")
const leftButton = document.querySelector(".fa-arrow-left")
const rightButton = document.querySelector(".fa-arrow-right")
const carousel = document.querySelector(".imagens")

console.log(carousel)


body.classList.replace("no-js", "js")

carousel.addEventListener("click", (e) => {
    console.log(e.target)
})

leftButton.addEventListener("click", () => {
    console.log("abacaxi")
})

rightButton.addEventListener("click", () => {
    console.log("Kamily")
})