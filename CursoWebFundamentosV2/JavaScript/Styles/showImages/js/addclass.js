const showCardOnScroll = [...document.querySelectorAll("[data-addclass-on-scroll]")]

window.addEventListener("scroll", function(){
    
    const scrollY = window.scrollY

    if(scrollY < 400){
        showCardOnScroll.forEach( element => {
            element.style.opacity = 0
        })
    }
    else {
        showCardOnScroll.forEach( element => {
            element.style.opacity = 100
        })
    }
})