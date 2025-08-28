/*
    Create a data structure called Product, that represents a item to sold.
    this product must have:

    - A public property called "name".
    - A private property called stockItems, must have:
        - can just modify internally.
        - must accept just integer numbers greater than zero.
        - can never get negative values.
    - A public method buy(quantity) that reduces the stock quantity.
    - A property called counter. which starts at zero and adds 1 every time the buy() method is executed.
    - A public method addStock(quantity) which increases stock with passed quantity (if valid).
    
    Whenever inventory is queried (product.stockItems),
    the current counter value should be displayed in the console.

    avoid variables in global scope
*/

(function(){
    class Product {
        #stockItems = 0 // Inicializa com 0
        #counter = 0 // Inicializa o contador

        constructor(name, initialStock = 0) {
            this.name = name
            this.addStock(initialStock) // Usa o método para garantir a validação
        }

        // Getter para a propriedade privada #stockItems
        get stockItems() {
            // Regra: exibe o valor do contador quando o estoque é consultado
            console.log(`Consulta de estoque para ${this.name}. Compras realizadas: ${this.#counter}`)
            return this.#stockItems
        }

        // Setter para garantir que o estoque não seja definido diretamente com valores inválidos
        set stockItems(quantity) {
            // A propriedade #stockItems só deve ser modificada internamente
            // Este setter está aqui para "proteger" a propriedade.
            console.error('O estoque só pode ser modificado usando os métodos addStock() e buy().')
        }

        // Método para reduzir o estoque
        buy(quantity) {
            if (typeof quantity !== 'number' || quantity <= 0) {
                console.error('A quantidade para compra deve ser um número inteiro maior que zero.')
                return
            }
            if (quantity > this.#stockItems) {
                console.warn(`Estoque insuficiente de ${this.name}. Disponível: ${this.#stockItems}`)
                return
            }

            this.#stockItems -= quantity;
            this.#counter++; // Incrementa o contador
            console.log(`${quantity} unidades de ${this.name} vendidas. Estoque atual: ${this.#stockItems}`)
        }

        // Método para aumentar o estoque
        addStock(quantity) {
            if (typeof quantity !== 'number' || quantity <= 0 || !Number.isInteger(quantity)) {
                console.error('A quantidade para adicionar deve ser um número inteiro maior que zero.')
                return
            }

            this.#stockItems += quantity;
            console.log(`${quantity} unidades de ${this.name} adicionadas. Estoque atual: ${this.#stockItems}`)
        }
    }

    // --- Exemplo de uso ---
    console.log("--- Exemplo de Uso ---")

    const notebook = new Product("Notebook", 10)
    const mouse = new Product("Mouse", 5)

    mouse.addStock(20)
    mouse.buy(25)
    mouse.buy(5)

    notebook.buy(2)
    notebook.buy(3)
    notebook.addStock(10)

})()