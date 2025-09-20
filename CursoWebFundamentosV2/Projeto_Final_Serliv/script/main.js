const hamburguerMenu = document.querySelector("#hamburguer-menu")
const navMenu = document.querySelector(".ul")

navMenu.classList.remove("closedMenu")
navMenu.classList.add("openedMenu")

function toggleNavMenu(){
    navMenu.classList.toggle("closedMenu")
    navMenu.classList.toggle("openedMenu")
    // if(navMenu.classList.contains('closedMenu')){
    //     openNavMenu()
    // } else {
    //     closeNavMenu()
    // }
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