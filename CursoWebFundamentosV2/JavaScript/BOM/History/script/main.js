// history - Informações sobre a navegação do usuário


document.getElementById("btnBack").addEventListener("click", function(){
    history.back()
})

document.getElementById("btnForward").addEventListener("click", function(){
    history.forward()
})