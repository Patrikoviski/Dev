const resultado = document.querySelector(".resultado")
const array = document.querySelector(".array")
const transacoes = [1500, 200, 150, 520]

array.textContent = transacoes

const soma = transacoes.reduce((accumulator, currentValue) => 
    accumulator + currentValue
)

console.log(soma)
resultado.textContent = soma