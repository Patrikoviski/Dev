const preco = document.querySelectorAll(".preco")

const precosOriginais = [...preco].map(span => {
    const textoPreco = span.textContent
    return parseFloat(textoPreco)
})

const precoDesconto = precosOriginais.map(preco => {
    const desconto  = preco * 0.1
    const novoPreco = preco - desconto

    return novoPreco.toFixed(2)
})

const novaLista = document.querySelector(".desconto");

precoDesconto.forEach(preco => {
    const li = document.createElement('li');
    li.textContent = `Preço com Desconto: R$ ${preco}`;
    novaLista.appendChild(li);
});