(function(){
  document.querySelector(".no-js").remove
  document.body.classList = "js"

  console.log("abacaxi")

  var carouselImgs = new Carousel({
    container: '.container .imagens',
    itens: 'img',
    btnPrev: '.fa-arrow-left',
    btnNext: '.fa-arrow-right'
  })
})()