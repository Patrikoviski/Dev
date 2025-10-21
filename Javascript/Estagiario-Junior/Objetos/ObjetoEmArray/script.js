const produtos = [
    {nome: "iphone", preco: 4000},
    {nome: "samsung", preco: 4000},
    {nome: "xiomi", preco: 4000},
    {nome: "LG", preco: 4000}
]

const nomesProduto = produtos.map(p => p.nome)

console.log(nomesProduto.toString())