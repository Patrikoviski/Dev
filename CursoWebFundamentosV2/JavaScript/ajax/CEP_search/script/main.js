let cep = document.getElementById("cep")
let logradouro = document.getElementById("logradouro")
let bairro = document.getElementById("bairro")
let cidade = document.getElementById("localidade")
let uf = document.getElementById("uf")
let dialog = document.getElementById("erro-dialog")
let dialogClose = document.getElementById("fechar-dialog")

//  viacep.com.br/ws/cep/json/

cep.addEventListener("input", function(){
    let cepCopy = this.value
    cepCopy = cepCopy.replace("-", "").trim()

    if (cepCopy.length == 8){
        cepSearch(cepCopy)
            .then(data => {
                if (data.erro){
                    throw Error("CEP invalido")
                }
                showCEP(data)
            })
            .catch(err => {
                cleanData()
                showError(err)
            })
    }
})

function cleanData(){
    logradouro.value = ""
    bairro.value = ""
    cidade.value = ""
    uf.value = ""
}

function showCEP(data){
    logradouro.value = data.logradouro || ""
    bairro.value = data.bairro || ""
    cidade.value = data.localidade || ""
    uf.value = data.uf || ""
}

function showError(){
    dialog.showModal()
}

dialogClose.addEventListener("click", function(){
    dialog.close()
})

async function cepSearch(){
    return await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(res => {
            if (!res.ok){
                throw Error(`Erro ao buscar o cep ${cep}`)
            }
            return res.json()
        })
}