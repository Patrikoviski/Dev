const busca = document.getElementById("busca")
const lista = document.querySelector(".lista__items")
const items = document.querySelectorAll(".item")


busca.addEventListener("keyup", () => {
    const buscador = busca.value.toLowerCase()
    
    items.forEach(e => {
        const textoItem = e.textContent.toLowerCase()
    
        if(textoItem.includes(buscador)){
            e.style.display = "block"
        } else {
            e.style.display = "none"
        }
    });
})