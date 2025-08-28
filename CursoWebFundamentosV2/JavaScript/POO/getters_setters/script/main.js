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

    dog.classe = "fish"
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
                if(_animalSpecies.includes(_classe)){
                    classe = _classe
                }
            }
        }
    }

    const turtle = createAnimal("lentil", "reptile")
})()