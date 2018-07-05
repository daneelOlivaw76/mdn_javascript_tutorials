/* var idCounter = 1;

function Employee(name, dept) {
   this.name = name || '';
   this.dept = dept || 'general';
   this.id = idCounter++;
}

var emp1 = new Employee('Pigbert, Victoria', 'pubs');
var emp2 = new Employee('Tschopik, Harry', 'sales');
console.log(emp1);
console.log(emp2);
*/
var idCounter = 1;

function Employee(name, dept) {
   this.name = name || '';
   this.dept = dept || 'general';
   this.id = idCounter++;
}

function Manager(name, dept, reports) {
	Employee.call(name,dept);
	this.base = Employee;
	this.reports = reports;
}
Manager.prototype = new Employee;

function WorkerBee(name, dept, projs) {
	Employee.call(name,dept);
	this.base = Manager;
	this.projs = projs;
}
WorkerBee.prototype = new Employee;

function Engineer(name, projs, mach) {
	Employee.call(name, 'engineering');
	this.base = WorkerBee;
	this.projs = projs;
	this.mach = mach;
}
Engineer.prototype = new Employee;

function SalesPerson(name, projs, quota)  {
	Employee.call(name,'sales');
	this.projs = projs;
	this.base = Engineer;
	this.quota = quota;
}
SalesPerson.prototype = new Employee;

var mac = new SalesPerson('Wood, Mac');

//console.log(mac.id);


function Hobbyist(hobby) {
   this.hobby = hobby || 'scuba';
}

function Engineer(name, projs, mach, hobby) {
   this.base1 = WorkerBee;
   this.base1(name, 'engineering', projs);
   this.base2 = Hobbyist;
   this.base2(hobby);
   this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;

var dennis = new Engineer('Doe, Dennis', ['collabra'], 'hugo');

console.log(dennis);
console.log(dennis.name);
console.log(dennis.dept);