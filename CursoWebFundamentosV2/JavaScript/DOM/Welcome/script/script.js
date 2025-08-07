(function(){
    const userName = "Kamily"
    let element = document.querySelector(".top-bar p")
    if (userName) {
        if (userName == "Kamily") {
            element.innerHTML += `<b>${userName}</b> <3`
        }
        else {
            element.innerHTML += `<b>${userName}</b>!`
        }
    } else {
        // element.parentElement.style.display = "none"
        // element.remove()
        // const elemenToRemove = element.parentElement
        // elemenToRemove.parentElement.removeChild(elemenToRemove)
        element.innerHTML = `<a href="#">Login</a>`
    }
})()