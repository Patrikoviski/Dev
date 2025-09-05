let cep = document.getElementById("cep")
let logradouro = document.getElementById("logradouro")
let bairro = document.getElementById("bairro")
let cidade = document.getElementById("localidade")
let uf = document.getElementById("uf")

//  viacep.com.br/ws/cep/json/

cep.addEventListener("input", cepSearch)

function showCEP(data){
    logradouro.value = data.logradouro
    bairro.value = data.bairro
    cidade.value = data.localidade
    uf.value = data.uf
}

async function cepSearch(){
    try{
        const answer = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        if(!answer.ok){
            throw Error("requisition error")
        }
        const data = await answer.json()
        showCEP(data)
    } catch(e){
        console.log(`Error: ${e}`)
    }
}