const body = document.querySelector("body")
const hamburguerMenu = document.querySelector("#hamburguer-menu")
const navMenu = document.querySelector(".ul")

body.classList.replace("no-js", "js")
navMenu.classList.remove("closedMenu")
navMenu.classList.add("openedMenu")