'use strict'

   
const spaceStation = require('./Space/spaceStation')
const planet = require('./Space/planet')
const cargo = require('./Space/cargo')
const deliveredCargo = require('./Space/deliveredCargo')

let station = new spaceStation.SpaceStation(123,'Earth')
spaceStation.addStation(station)
console.log(spaceStation.stations)


console.log(spaceStation.findStationOnPlanet('Earth'))

spaceStation.deleteStation(station)
console.log(spaceStation.stations)

spaceStation.changeStation(0)(900,'Mars')
console.log(spaceStation.stations)

let st1=new spaceStation.SpaceStation(103,'Earth')
console.log(spaceStation.findStation(st1))


console.log(spaceStation.findStationOnPlanet('Earth'))

