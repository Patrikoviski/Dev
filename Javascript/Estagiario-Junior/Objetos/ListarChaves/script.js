const livro = {
    titulo: "Livro",
    preco: 19.90
}

const listarObjeto = (obj) => Object.values(obj).toString()

console.log(listarObjeto(livro))