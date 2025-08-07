const txtEmail = document.getElementById("email")


function emailEdit() {
    txtEmail.disabled = false
    txtEmail.focus()
}

function emailDisable() {
    txtEmail.disabled = true
}