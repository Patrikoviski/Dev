const calcRevealPattern = (function(){
    let n = 0

    function _checkNumber(n){
        if(typeof n !== "number"){
            throw TypeError("only numbers!")
        }
    }

    function some(_n){
        _checkNumber(_n)
        n += _n
        return this
    }
    
    function subtract(_n){
        _checkNumber(_n)
        n -= _n
        return this
    }
    
    function log(){
        console.log(n)
        return this
    }

    return {
        some,
        subtract,
        log
    }
})()

calcRevealPattern.some(9).some(8).some(2).log()