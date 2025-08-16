(function(){
    window.addEventListener("scroll", menuHighlight)

    const menu = document.querySelector(".nav")
    const links = menu.querySelectorAll("li a")

    function menuHighlight(){
        let positions = [...links].map(link => {
            let href = link.getAttribute("href")

            let h2 = document.querySelector(href)
            return h2.getBoundingClientRect().top
        })
        let activedLink = getLastElement(positions)
        let activedMenu = menu.querySelector(".actived")
        if (activedMenu){
            activedMenu.classList.remove("actived")
        }
        if (activedLink) {
            activedLink.classList.add("actived")
        }
    }

    function getLastElement(arr) {
        let position = arr.filter(n => n < 0)
        return links[position.length - 1]
    }

    menuHighlight()
})()