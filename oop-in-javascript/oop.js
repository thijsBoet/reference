const circle = {                // Object literal syntax === bad for reusability with behaviours => draw
    location: {
        x: 1,                   // Property
        y: 1
    },
    draw: function() {          // Method
        console.log('draw');
    }
};
circle.draw();

// Factory Reconstructor Function, better for reusability
function createCircle(radius){
    return {
        radius,                 // In ES6 same as radius = radius
        draw: function(){
            console.log('draw2');
        }
    };
}
const circle2 = createCircle(1);
circle2.draw();

// Constructor function, best for reusability
function Circle(radius){        // "className" therefor Uppercase first letter Circle
    this.radius = radius;       
    this.draw = function(){
        console.log('draw3')
    }
}
const circle3 = new Circle(1);  // new instantiates empty object, gives this a value and returns constructor function
circle3.draw();

// Functions are Objects in JS => Circle.name Circle.length 
const Circle4 = new Function('radius', 
   `this.radius = radius;       
    this.draw = function(){
        console.log('draw4')
    }`
);
const circle4 = new Circle4(1);
// Function expressed as Object
console.log(circle4);

// instantiates empty object, gives this a value and returns constructor function just as line 31 with new keyword
Circle.call({},1);
// Same as call only uses an array as second argument
Circle.apply({}, [1]);

// Two types of values in JS 
// Value Types (primitives)              Reference types (objects)
// ---------------------------------------------------------------
// Number                                Object
// String                                Functions      -> Object
// Boolean                               Array          -> Object
// Symbol (new ES6)
// undefined
// null

// Both behave differently
// Primitives are copied by their value
let x = 10;
let y = x;

x = 20;
console.log(x);             // 20
console.log(y);             // 10

// Objects are copied by their reference => both are pointing to the same reference in memory
let a = {value: 10};
let b = a;

a.value = 20;
console.log(a);             // 20
console.log(b);             // 20


let number = 10;
function increase(number){
    number++;
}
increase(number);
console.log(number);        // 10 => function is in local, but not global scope


let obj = {value:10};
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj);           // 11 => obj is passed by it's reference not it's value

// We can add properties to an object after it is declared without changing the "class" =>
// Circle.token = '14540'

circle.location = { x: 1 }; // dot notation simpler and less verbose

const propertyName = 'location';
circle['location'] = {x:1}; // bracket notation usefull for dynamic values

// to delete sensitive data properties use the delete keyword
delete circle.location;

// to iterate over properties in an object we can use the for ... in loop
for (let key in circle4){
    console.log(key, circle4[key]); // key for properties and bracket notation for value
}

// other method to get all the properties in an array
const keys = Object.keys(circle4);
console.log(keys);

// to check for a property
if('radius' in circle4)
    console.log("Circle has a radius");

// Abstraction => Hide details and Show essentials
function Circle_(radius){
    this.radius = radius;
    this.defaultLocation = {x:0, y:0};       // <= Should hide details of implementation values x & y
    this.computeOptimumLocation = function(factor){   
        // ...
    }
    this.draw = function(){
        this.computeOptimumLocation();       // <= Should hide details of implementation. Use default value used in every implementation or remove
        console.log('draw5')
    }
}

// Better
function Circle__(radius){
    this.radius = radius;
    let defaultLocation = {x:0, y:0};       // <= Does not reference every specific object with these VALUES
    let computeOptimumLocation = function(factor){   //                    ""
        // ...
    }
    this.draw = function(){
        computeOptimumLocation(0.1);        // <= Uses default value and doesn't reference every object.
        console.log('draw6')
    }
}

// How the get defaultLocation value which is out of scope 
function Circle___(radius){
    this.radius = radius;
    let defaultLocation = {x:0, y:0};
    this.getDefaultLocation = function(){   // Create inner get function which returns the value
        return defaultLocation;
    };
    this.draw = function(){
        computeOptimumLocation(0.1);
        console.log('draw6')
    };
    Object.defineProperty(this, 'defaultLocation',{
        get: function(){                    // Better method use Object defineProperty get function
            return defaultLocation;
        },
        set: function(value){               // This is how you set a value
            defaultLocation = value;
        }
    });
}

const circle5 = new Circle___(10);

console.log(circle5.getDefaultLocation());
console.log(circle5.defaultLocation);


function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function (){
        if(running)
            throw new Error('Stopwatch has already started.');

        running = true;
        startTime = new Date();
    };

    this.stop = function (){
        if(!running)
            throw new Error('Stopwatch has not started yet.');
        
        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function (){
        startTime   = null;
        endTime     = null;
        running     = false;
        duration    = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function(){ return duration; }
    });
}

const sw = new Stopwatch;
sw.start();