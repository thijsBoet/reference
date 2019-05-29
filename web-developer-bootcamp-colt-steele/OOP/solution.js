// Contructor Function begin with capital letters
function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}
var firstHouse = House(2,2,1000);
firstHouse; //  => undefined
// We are not returning anything from our function so our function returns undefined.

// We are not explicitly binding the this keyword or placing it in a declared object,
// this means that "this" will be in the global object.
var secondHouse = new House(2,2,1000);
secondHouse.bedrooms; //2
secondHouse.bathrooms; //2
secondHouse.numSqft //1000
/* new keyword can only be used on a function
1) creates empty object
2) it sets the this keyword to be that empty object
3) it adds a "return this" to the end of the function.
4) it adds a property to the empty object called "__proto__",
   which links the prototype property on the constructor function
   to the empty object. */
function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name + " just barked!");
    };
}
var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);

rusty.bark();
fido.bark();

// Multiple Constructors
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}
// DRY method by using call/apply function and changing context of this keyword to Motorcycle.
function Motorcycle(make, model, year){
    Car.call(this, make, model, year);
    this.numWheels = 2;
}
// Arguments keyword return the arguments listed in the function (make, model, year)
function Motorcycle(make, model, year){
    Car.apply(this, arguments);
    this.numWheels = 2;
}
// More __proto__ 
function Person(name){
    this.name = name;
}

var ellie = new Person("Ellie");
var colt = new Person("Colt");

ellie.__proto__ === Person.prototype;   // true
colt.__proto__  === Person.prototype;   // true

Person.prototype.constructor;           // returns

function Person(name){
    this.name = name;
}

Person.prototype.isInstructor = true;

ellie.isInstructor;// true => these objects have a link with Person.prototype they can access anything inside of it.
colt.isInstructor; // true => 

var arr = [];
arr.push(10);      // looks at object and if it cant find method or property it looks up the __proto__ chain until it finds it or returns undefined
arr.__proto__=== Array.prototype; //true
console.dir(arr);

arr.hasOwnProperty("length"); //true

function Person(name){                              
    this.name = name;
    this.sayHi = function(){
        return "Hi " + this.firstName;
    };
}

carl = new Person("Carl");
carl.sayHi(); // Hi Carl

// Same constructor have now a shared prototype.
function Person2(name){                              
    this.name = name;
}

Person2.prototype.sayHi = function(){
    return "Hi " + this.name;
};

tom = new Person2("Tom");
tom.sayHi(); //Hi Tom

function Vehicle(make, model, year, isRunning){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
};

Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
};

Vehicle.prototype.honk = function(){
    if(this.isRunning){
        return "beep!";
    }
};
