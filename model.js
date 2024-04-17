class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.speed = 0;
    }
  
    accelerate(speedIncrease) {
      this.speed += speedIncrease;
      console.log(`The ${this.make} ${this.model} is now traveling at ${this.speed} mph.`);
    }
  //this function have been  commented
    brake(speedDecrease) {
      if (this.speed >= speedDecrease) {
        this.speed -= speedDecrease;
      } else {
        this.speed = 0;
      }
      console.log(`The ${this.make} ${this.model} slowed down to ${this.speed} mph.`);
    }
  
    honk() {
      console.log(`Beep beep! The ${this.make} ${this.model} is honking.`);
    }
  }
  
  // Example usage
  const myCar = new Car('Toyota', 'Camry', 2020);
  