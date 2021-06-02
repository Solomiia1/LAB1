
class  SpaceStation  {
    
   constructor(number,planet){
        //this.collection = 'SpaceStation'
        this.number=number
        this.planet=planet
    }
}

let stations= [
    new SpaceStation(100,'Earth'),
    new SpaceStation(101,'Earth'),
    new SpaceStation(200,'Mars'),
    new SpaceStation(300,'Saturn'),
    new SpaceStation(400,'Jupiter')
];

function changeStation(n){
    if(n<stations.length){
  return function(number, planet){
      stations[n].number=number 
      stations[n].planet=planet
    }
  }
}

 function addStation(station){
     if(stations.indexOf(station)>-1){
      console.log('станція існує у колекції')
    }
    else{
        stations.push(station)
    }
 }

 function deleteStation(station){
     let i =stations.indexOf(station)
     if(i>-1){
    return stations.splice(i,1)
 }
 else return stations
}

function  findStation(station){
    let index = stations.indexOf(station)
    if(index>-1){
        return index
    }else{
        console.log('Станція не додана в колекцію')
        return -1
    }
}
function findStationOnPlanet(planet){
    return stations.filter(items=>items.planet===planet)
    
}


exports.SpaceStation=SpaceStation;
exports.stations=stations;
exports.changeStation=changeStation;
exports.addStation=addStation;
exports.deleteStation=deleteStation
exports.findStation =findStation
exports.findStationOnPlanet=findStationOnPlanet



