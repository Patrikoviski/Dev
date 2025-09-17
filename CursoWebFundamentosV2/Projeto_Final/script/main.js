document.querySelector(".no-js").remove
document.body.classList = "js"
document.querySelector("span").style = ""
let slideshow = document.querySelector(".slideshow")
let quote_slideshow = document.querySelector(".quote-slideshow")
let quote_slideshow_01 = `<figure style="width: 70%;">
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam maiores minima sapiente laboriosam repellat error.</h2>
                    <figcaption>Lorem ipsum dolor sit amet.</figcaption>
                </figure>`
let quote_slideshow_02 = `<figure>
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex saepe cupiditate fuga. Dolores, officiis quas!</h2>
                    <figcaption>Lorem ipsum dolor sit.</figcaption>
                </figure>`           

quote_slideshow.innerHTML = `<span class="prev"><i class="fas fa-angle-left"></i></span>${quote_slideshow_01}<span class="next"><i class="fas fa-angle-right "></i></span>`


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