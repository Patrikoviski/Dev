(function(){
  document.querySelector(".no-js").remove
  document.body.classList = "js"

  console.log("abacaxi")

  var carouselImgs = new Carousel({
    container: '.laptop-slider .slideshow',
    itens: 'figure',
    btnPrev: '.prev',
    btnNext: '.next'
  })

  var carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()