function Car(make, model, year, owner) {
  this.model = model;
  this.year = year;
  this.owner = owner; 
  this.displayCar = displayCar;
}
Car.prototype.make = '';

function Chevy(model, year, owner, seats) {
Car.call(this, 'Chevy', model, year, owner);
}

Car.prototype.make = 'Chevy';
Chevy.prototype = new Car; 

function displayCar() {
  var result = 'A Beautiful ' + this.year + ' ' + this.make
    + ' ' + this.model;
  pretty_print(result);
}

function pretty_print(string) {
  console.log('| ' + string + ' |');
}

var chev = new Chevy('chevelle', 1978, 'Rui', 5);
console.log(chev);
chev.displayCar();
console.log(chev.__proto__);
console.log(chev.make);
chev.make = 'chevy';
console.log(chev.make);
console.log(Car.prototype);