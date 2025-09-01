/*
✓ Create a class called Cart which represents a shopping cart. this class must have:

✓ A private property called #items, which is an array of product names

✓ A public method addItem(name) that adds the name of a product to array #items

✓ A public getter called items, which returns array items of cart.

✓ A public method removeItem(name), that returns index item in array.

✓ Create a private method called #getIndex(name), that returns index item in array.
This method must be use internally by removeItem

✓ After implemented. instance a cart, add some items.

acess array items directly via getter and try modify out of class, watch what happens.

✓ extra tip: if you want, think in a form to avoid the real array from cart be changed external.
*/

class Cart{

    #items = []

    constructor(name){
        this.name = name
    }

    addItem(name){
        this.#items.push(name)
    }

    removeItem(name){
        const index = this.#getIndex(name)
        if (index >= 0) {
            this.#items.splice(index, 1)
        }
        return index
    }

    #getIndex(name){
        return this.#items.indexOf(name)
    }


    get items(){
        return Array.from(this.#items)
    }
}


let cart = new Cart()

cart.addItem("iphone 16 pro max")
cart.addItem("RTX 4090")
cart.addItem("logitech G403 HERO")
console.log(cart.items)
cart.removeItem("RTX 4090")
cart.items
console.log(cart.items)
cart.removeItem("iphone 16 pro max")
cart.items
console.log(cart.items)
cart.removeItem("logitech G403 HERO")
cart.items
console.log(cart.items)