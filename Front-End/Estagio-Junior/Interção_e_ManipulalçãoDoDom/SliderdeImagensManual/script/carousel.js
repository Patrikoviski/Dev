(function(){
  document.body.classList.remove("no-js")
  document.body.classList = "js"

  console.log("abacaxi")

  var carouselImgs = new Carousel({
    container: '.container',
    itens: 'img',
    btnPrev: '.fa-arrow-left',
    btnNext: '.fa-arrow-right'
  })
})()