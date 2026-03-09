class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;


  constructor(carDetails){
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;

  };

  displayInfo(){
    const trunkStatus= this.isTrunkOpen ? 'Open' : 'Close';
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h Trunk: ${trunkStatus}`);
  };

  go(){
    if (!this.isTrunkOpen) {
      this.speed += 5;
    };
    if (this.speed >= 200) {
      return this.speed = 200;
    }
  };

  brake(){
    this.speed -= 5;
    if (this.speed <= 0) {
      return this.speed = 0;
    };
  };

  openTrunk(){
    if (this.speed >0) {
    return this.isTrunkOpen = false;
    } else if (this.speed <= 0) {
    return this.isTrunkOpen = true;
    }
  };

  closeTrunk(){
    this.isTrunkOpen = false;
  };


};

class RaceCar extends Car{
  acceleration;

  constructor(carDetails){
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  displayInfo(){
    const trunkStatus= "No Trunk";
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h Trunk: ${trunkStatus}`);
  }

  go(){
    this.speed += this.acceleration;
    if (this.speed >=300) {
      return this.speed = 300;
    }
  };


  openTrunk(){
    console.log('No Trunk')
  };

  closeTrunk(){
    console.log('No Trunk')
  };
}




const car1 = new Car ({
  brand: 'Toyota',
  model: 'Corolla',
});

const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3',
});

const car3 = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
})

console.log(car1);
console.log(car2);
console.log(car3);

/*car1.displayInfo();
car2.displayInfo();

car1.go();
car1.displayInfo();
car1.openTrunk();
car1.displayInfo();
car1.brake();
car1.displayInfo();
car1.openTrunk();
car1.displayInfo();
car1.go()
car1.go()
car1.go()
car1.displayInfo();
car1.closeTrunk();
car1.go()
car1.go()
car1.go()
car1.displayInfo();
*/

car3.go()
car3.displayInfo();
car3.openTrunk();
car3.displayInfo();





