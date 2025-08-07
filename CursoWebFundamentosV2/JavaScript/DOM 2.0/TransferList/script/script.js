//  ✓  create a new li with text "item 2" and include at ul from div with class alvo

li = document.createElement("li")
// attribute = document.createAttribute("id")
// attribute.value = "li_text"
// li.setAttributeNode(attribute)

li.textContent = "item 2"

document.querySelector(".alvo ul").appendChild(li)





//  ✓  move the last li from original to alvo (but before first li)

let newChild = document.querySelector(".original ul").lastElementChild

let alvo = document.querySelector(".alvo ul")

// alvo.insertAdjacentElement("afterbegin", newChild)
alvo.insertBefore(newChild, alvo.firstElementChild)





//  ✓  change the text from .alvo first li to item 0

document.querySelector(".alvo ul").firstElementChild.textContent = "item 0"





//  ✓  do a clone from .original ul and include in .alvo first li

let ulClone = document.querySelector(".original ul").cloneNode(true)

newChild.insertAdjacentElement("beforeend", ulClone)




//  ✓  remove the last li (item2) from inserted list on last step

// document.querySelector(".alvo ul").firstElementChild.firstElementChild.lastElementChild.remove()
ulClone.removeChild(ulClone.lastElementChild)






//  ✓  remove the two last li in original ul

document.querySelector(".original ul").remove()