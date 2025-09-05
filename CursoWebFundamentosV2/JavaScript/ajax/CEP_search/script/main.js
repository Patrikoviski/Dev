let cep = document.querySelector("#cep")
let logradouro = document.querySelector("#logradouro")
let bairro = document.querySelector("#bairro")
let cidade = document.querySelector("#localidade")
let uf = document.querySelector("#uf")

//  viacep.com.br/ws/cep/json/

function showCEP(data){
    data.forEach(element => {
        logradouro = element.logradouro
        bairro = element.bairro
        cidade = element.cidade
        uf = element.uf
    })
    
}

async function cepSearch(){
    try{
        const answer = await fetch(`viacep.com.br/ws/${cep.value}/json/`)
        if(!answer.ok){
            throw Error("requisition error")
        }
        const data = answer.json()
        showCEP(data)
    } catch(e){
        console.log(`Error: ${e}`)
    }
}