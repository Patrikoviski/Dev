const email = document.getElementById("email")
const senha = document.getElementById("pass")
const botaoEnviar = document.getElementById("enviar")

botaoEnviar.addEventListener("click", (e) => {
    e.preventDefault()

    if(!email.value){
        window.alert("O campo email deve ser preenchido!")
    } else if (!senha.value){
        window.alert("O campo senha deve ser preenchido")
    }
})