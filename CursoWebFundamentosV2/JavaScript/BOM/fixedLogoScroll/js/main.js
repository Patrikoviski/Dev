(function(){
    const body = document.getElementById("body")
    
    window.addEventListener("scroll", function() {
        if(pageYOffset > 80 && !body.classList.contains("fx")) {
            body.className = "fx"
        }
        else if(pageYOffset <= 80 && body.classList.contains("fx")){
            body.classList.remove("fx")
        }
    })
})()