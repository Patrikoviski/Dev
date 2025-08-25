const calc = {
    value: 0,
    some(n){
        this.value += n
        return this
    },
    subtract(n){
        this.value -= n
        return this
    },
    log(){
        console.log(this.value)
        return this
    }
}

calc.some(5).some(10).log().some(20).log()