let div = document.querySelector("div")

div.style.backgroundColor = "#ddd"

console.log(div.style.backgroundColor)


// getComputedStyle() pega o style computado e nao o style-inline

window.getComputedStyle(div)

console.log("offsetHeight")
console.log(div.offsetHeight)

console.log("offsetWidth")
console.log(div.offsetWidth)

console.log("offsetLeft")
console.log(div.offsetLeft)

console.log("offsetTop")
console.log(div.offsetTop)

console.log("getBoundingClientRect()")
console.log(div.getBoundingClientRect())