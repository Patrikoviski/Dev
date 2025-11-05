function Pessoa(obj){
    _name = obj.name
    _idade = obj.idade

    if(_idade >= 18){
        console.log(_name)
        return _name
    }
}