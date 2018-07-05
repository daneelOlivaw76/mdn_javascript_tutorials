function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return console.log(result); 
}

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner; 
  this.displayCar = displayCar;
}

function Chevy(model, year, seats) {
Car.call('Chevy', model, year);
this.seats = seats; 
}

Chevy.prototype = Object.create(Car.prototype);

function displayCar() {
  var result = 'A Beautiful ' + this.year + ' ' + this.make
    + ' ' + this.model;
  pretty_print(result);
}

function pretty_print(string) {
	console.log('| ' + string + ' |');
}

var rand = new Person('Rand McKinnon', 33, 'M');
var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
/*console.log(car1);
listAllProperties(car1);
Car.prototype.color = null;
car1.color = 'black';
/*console.log(car1);
listAllProperties(car1);
listAllProperties(Car);*/
car1.displayCar();

