class Planet {
    constructor(name,capacity=0){
        this.name=name
        this.capacity =capacity
    }
}

let planets =[
    new Planet('Earth',4),
    new Planet('Mars',6),
    new Planet('Venus',9),
    new Planet('Jupiter',12),
    new Planet('Neptune'),
    new Planet('Mercury',1),
    new Planet('Saturn'),
    new Planet('Uranus')
]

function addPlanet(planet){
    planets.push(planet)
}


function changePlanet(n){
    if(n<planets.length){
    return function(name,capacity=0){
        planets[n].name=name
        planets[n].capacity=capacity
    }
    }
}

function deletePlanet(planet){
    let i = planets.indexOf(planet)
    if(i>-1){
    return planets.splice(i,1)
    }
}

function findPlanet(planet){
    let index = planets.indexOf(planet)
    if(index>-1){
        return index
    }else{
        console.log('Планета не додана в колекцію')
    }
}

exports.Planet =Planet
exports.planets=planets
exports.addPlanet=addPlanet
exports.changePlanet = changePlanet
exports.deletePlanet=deletePlanet
exports.findPlanet=findPlanet
