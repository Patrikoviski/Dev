const body = document.querySelector("body")
const hamburguerMenu = document.querySelector("#hamburguer-menu")
const navMenu = document.querySelector(".ul")

body.classList.remove("no-js")
body.classList.add("js")
navMenu.classList.remove("closedMenu")
navMenu.classList.add("openedMenu")

function toggleNavMenu(){
    navMenu.classList.toggle("closedMenu")
    navMenu.classList.toggle("openedMenu")
}

// menu aberto

function openNavMenu(){
    navMenu.classList.remove("closedMenu")
    navMenu.classList.add("openedMenu")
}

// menu fechado

function closeNavMenu(){
    navMenu.classList.remove("openedMenu")
    navMenu.classList.add("closedMenu")
}

hamburguerMenu.addEventListener("click", toggleNavMenu)