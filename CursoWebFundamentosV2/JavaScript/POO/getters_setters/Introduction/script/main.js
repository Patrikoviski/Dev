(function(){
    let classe = ""
    const animalSpecies = [
        "mammal",
        "amphibian",
        "reptile",
        "fish"
    ]

    const dog = {
        name: "rex",

        get class(){
            return classe
        },

        set classe(_class){
            if(typeof _class != 'string'){
                throw new Error("only text accepted")
            }

            if(animalSpecies.includes(_class)){
                classe = _class
            }
            else {
                console.log(`${_class} not permited specie!`)
            }

        }
    }

    dog.classe = "mammal"
    console.log(dog.class)

    function createAnimal(name, classe){
        let _classe = classe
        const _animalSpecies = [
            "mammal",
            "amphibian",
            "reptile",
            "fish"
        ]

        return {
            name,
            
            get classe(){
                return _classe
            },

            set classe(newClasse){
                if(_animalSpecies.includes(newClasse)){
                    classe = newClasse
                }
            }
        }
    }

    const turtle = createAnimal("lentil", "reptile")
    
    console.log(turtle.name)
    console.log(turtle.classe)
    turtle.name = "slowed"
    console.log(turtle.name)
    turtle.classe = "test"
    console.log(turtle.classe)

    class Animal{

        #classe // private property

        constructor(name, classe){
            this.name = name
            this.#classe = classe
        }

        get classe(){
            return this.#classe
        }

        set classe(newClasse){
            const _animalSpecies = [
                "mammal",
                "amphibian",
                "reptile",
                "fish"
            ]
            if(_animalSpecies.includes(newClasse)){
                this.#classe = newClasse
            }
        }
    }

    const nemo = new Animal("nemo", "fish")
    console.log(nemo)
    nemo.classe = "mammal"
    console.log(nemo.classe)
    nemo.classe = "door"
    console.log(nemo.classe)
})()