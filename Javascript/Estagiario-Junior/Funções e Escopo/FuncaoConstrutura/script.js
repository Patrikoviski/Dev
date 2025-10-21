class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    apresentar(){
        return `seja bem vindo(a) ${this.nome}`
    }
}

const jose = new Pessoa("jose bezerra")
console.log(jose.apresentar())