let paragraphs = document.querySelectorAll(".paragraph-length")
let div = document.querySelectorAll(".card")
let arrow = document.querySelectorAll(".arrow")
let paragraphsLenght = []

paragraphs.forEach((paragraph, index) => {
    const textLenght = paragraph.textContent.length
    paragraphsLenght.push(textLenght)
    
    if (textLenght > 100) {
        paragraph.classList = "arrow-icon"

    }
})

arrow.forEach((arrowElement, index) => {
    arrowElement.addEventListener("click", function(e) {
        div[index].style.overflow = "visible";
        div[index].style.height = "auto"
        console.log(div[index])
    });
});