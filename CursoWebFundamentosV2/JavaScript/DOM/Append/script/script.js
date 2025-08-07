(function(){
    const userName = "Kamily"
    const elementTopBar = document.createElement("div")
    const dadElement = document.querySelector(".hero")
    elementTopBar.className = "top-bar"

    if (userName) {
        if (userName == "Kamily") {
            elementTopBar.innerHTML = `<p> Welcome, <b>${userName} <3</b></p>`
            dadElement.insertBefore(elementTopBar, dadElement.firstElementChild)
        } else {
            elementTopBar.innerHTML = `<p> Welcome, <b>${userName}!</b></p>`
            dadElement.insertBefore(elementTopBar, dadElement.firstElementChild)
        }
    } else {
        elementTopBar.innerHTML = `<p><a href="#" class="log-link">Login</a></p>`
        dadElement.insertBefore(elementTopBar, dadElement.firstElementChild)
    }
})()