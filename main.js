//classes

class Ship{
  constructor(weight, cargoSuppliers = {}){
    this.weight = weight
    this.cargoSuppliers = cargoSuppliers
  }
}

class Port{
  constructor(){
    
  }
}
//test 
var ship1 = new Ship(234, {'yu shipping', 'moo tastic', 'garden greens'})

