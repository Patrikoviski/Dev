let paragraphs = Array.from(document.querySelectorAll(".paragraph-length"))
let originTexts = paragraphs.map(p => p.innerText)
let div = document.querySelectorAll(".card")
let arrow = document.querySelectorAll(".arrow")
let maxLength = 100
let paragraphsLenght = []

// console.log(originTexts)

paragraphs.forEach((p, i) => {
    if(p.innerText.length > maxLength) {
        p.textContent = p.innerHTML.substring(0, maxLength) + "..."

        const btn = document.createElement("button")
        btn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'
        p.parentElement.classList.add("text-hidden")

        p.parentElement.appendChild(btn)

        btn.addEventListener("click", function(){
            const isExpanded = btn.querySelector(".fa-chevron-up") == null

            if (isExpanded) {
                p.textContent = originTexts[i];
                btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>'
                p.parentElement.classList.remove("text-hidden")
            } else {
                p.textContent = p.innerHTML.substring(0, maxLength) + "..."
                btn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'
                p.parentElement.classList.add("text-hidden")
            }
        })
    }
})