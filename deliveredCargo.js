class DeliveredCargo {
    constructor(cargo,planet,spaceStation){
        this.cargo=cargo
        this.planet=planet
        this.spaceStation=spaceStation
    }
}

let deliveredCargoes = [
    new DeliveredCargo(1,'Earth',3),
    new DeliveredCargo(2,'Mars',4),
    new DeliveredCargo(3,'Venus',3),
    new DeliveredCargo(4,'Jupiter',1)
]


function addDeliveredCargo(cargo){
    cargoes.push(cargo)
}


function changeDeliveredCargo(n){
    if(n<deliveredCargoes.length){
    return function(cargo,planet,spaceStation){
        deliveredCargoes[n].planet=planet
        deliveredCargoes[n].cargo=cargo
        deliveredCargoes[n].spaceStation=spaceStation
    }
    }
}

function deleteDeliveredCargo(cargo){
    let i = deliveredCargoes.indexOf(cargo)
    if(i>-1){
    return deliveredCargoes.splice(i,1)
    }
}

exports.Cargo=DeliveredCargo
exports.deliveredCargoes=deliveredCargoes
exports.addDeliveredCargo=addDeliveredCargo
exports.changeDeliveredCargo=changeDeliveredCargo
exports.deleteDeliveredCargo=deleteDeliveredCargo

