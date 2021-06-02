const { changePlanet } = require("./planet")

class Cargo {
    constructor(code,name,weight){
        this.code=code
        this.name=name
        this.weight=weight
    }
}

let cargoes =[
    new Cargo(1,'fruits',16),
    new Cargo(2,'sand',90),
    new Cargo(3,'inventory',100)
]

function addCargo(cargo){
    cargoes.push(cargo)
}


function changeCargo(n){
    if(n<cargoes.length){
    return function(code,name,weight=0){
        cargoes[n].name=name
        cargoes[n].code=code
        cargoes[n].weight=weight
    }
    }
}

function deleteCargo(cargo){
    let i = cargoes.indexOf(cargo)
    if(i>-1){
    return cargoes.splice(i,1)
    }
}

exports.Cargo=Cargo
exports.addCargo=addCargo
exports.changeCargo=changeCargo
exports.deleteCargo=deleteCargo