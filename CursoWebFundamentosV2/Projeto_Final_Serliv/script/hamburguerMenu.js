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