document.querySelector(".no-js").remove
document.querySelector("span").style = "display: block;"
let slideshow = document.querySelector(".slideshow")


function nextSlide() {
  let currentImage = slideshow.querySelector("figure img")
  let currentSrc = currentImage.src
  let count = parseInt(currentSrc.slice(-5, -4))
  
  if (count < 2) {
    count++
  } else {
    count = 1
  }
  
  currentImage.src = `assets/slider/slide-0${count}.png`
}

function prevSlide() {
    let currentImage = slideshow.querySelector("figure img")
    let currentSrc = currentImage.src
    let count = parseInt(currentSrc.slice(-5, -4))
    
    
    if (count > 1) { 
        count--;
    } else {
        count = 2;
    }
    
    currentImage.src = `assets/slider/slide-0${count}.png`
}


slideshow.innerHTML = '<span class="prev"><i class="fa-solid fa-angle-left"></i></span><figure><img src="assets/slider/slide-01.png" alt=""></figure><span class="next"><i class="fa-solid fa-angle-right"></i></span>'
slideshow.classList.add("slideshowJS")

const leftArrow = document.querySelector(".prev")
const rightArrow = document.querySelector(".next")

rightArrow.addEventListener("click", nextSlide)
leftArrow.addEventListener("click", prevSlide)