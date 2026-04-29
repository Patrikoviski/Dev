const buttonOP = document.getElementById("OP")
const toggleMenu = document.getElementById("toggleMenu")
const sidebar = document.getElementById("sidebar")
const OPcontainer = document.getElementById("OP-container")

buttonOP.onclick = () => {
    OPcontainer.classList.toggle("active")
}


toggleMenu.onclick = () => {
    sidebar.classList.toggle("active")
}