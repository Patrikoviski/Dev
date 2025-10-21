function escopoLocal(){
    let variavelLocal = 0
}

try {
    variavelLocal = 15
} catch {
    throw "nao se pode alterar uma variavel local fora do escopo dela"
} finally {
    console.log("nao faça mais isso :)")
}