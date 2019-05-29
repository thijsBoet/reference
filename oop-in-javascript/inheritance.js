// Inheritence
// Base/Super/Parent    Prototype / "class"
// Derived/Sub/Child    Prototype / "class"

// Classical(java/C) vs Prototypical(js) inheritance
let c = {};
console.log(c);                                     // __proto__: Object => prototype Object in memory

c.toString();
console.log(c);                                     // __proto__: Object => prototype of same Object in memory

let d = {};                                         // __proto__: Object => prototype of same Object c in memory
console.log(Object.getPrototypeOf(c) === Object.getPrototypeOf(d)); // true

// Prototypical inheritance => first js looks for the property in the instance and then goes up the chain untill root
let myArray = [];
console.log(myArray);                               // __proto__ => Array prototype  __proto__ => Object prototype === multi level inheritence

let person = { name: "Matthijs" };
console.log(Object.keys(person));                   // Methods such as toString do not appear

let ObjectPrototype = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(ObjectPrototype, 'toString');
console.log(descriptor);

Object.defineProperty(person, 'name', {             // To change property use Object.defineProperty
    writable: false,                    
    enumerable: false
});

// To get prototype use:
Object.getPrototypeOf(circle5);                     // Same as circles5.__proto__ (parent of Object)

let object = {};                                    // === new Object
console.log(object.__proto__);                      // === Object.prototype
console.log(object.__proto__ === Object.prototype); // same parent prototype

let arr = [];                                       // === new Array
console.log(arr.__proto__);                         // === Array.prototype
console.log(arr.__proto__ === Array.prototype);     // same parent prototype

Circle.prototype === circle.__proto__;              // same parent prototype

// To include the draw method within the prototype (more memory efficient with more instantiations)
Circle.prototype.draw = function(){                 // === prototype members instead of instance members
    console.log('draw')
}

const c1 = new Circle(1);
const c2 = new Circle(1);

// We can even change excisting methods *** carefull => bad form ***
Circle.prototype.toString = function(){
    return 'Circle with radius ' + this.radius;
}

// Object.keys only returns instance members
Object.keys(c1)                                     // radius, draw

// for .. in => returns all members (prototype + instance)
for (let key in c1) console.log(key)                // radius, draw, toString

// Don't modify Objects you don't own =>
Array.prototype.shuffle = function(){
    // Build-in object may be keywords in frameworks or might be used in future version of JS => debug nightmare
}

// Premature optimization is the root of all evils
function Stopwatch_proto(){
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'duration', {
        set: function(value){ duration = value; },  // No longer an abstract value outside Prototype sw.duration = 10
        get: function(){ return duration; }
    });

    Object.defineProperty(this, 'startTime', {
        get: function(){ return startTime; }
    });

    Object.defineProperty(this, 'endTime', {
        get: function(){ return endTime; }
    });

    Object.defineProperty(this, 'running', {
        get: function(){ return running; }
    });
}

Stopwatch_proto.prototype.start = function(){
    if(this.running)
        throw new Error('Stopwatch has already started.');
    this.running = true;
    this.startTime = new Date(); 
}

Stopwatch_proto.prototype.stop = function(){
    if(!this.running)
            throw new Error('Stopwatch has not started yet.');
        
        this.running = false;
        this.endTime = new Date();

        const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
        this.duration += seconds;
}

Stopwatch_proto.prototype.reset = function(){
    startTime   = null;
    endTime     = null;
    running     = false;
    duration    = 0;
}

const sw_proto = new Stopwatch_proto;
sw_proto.start();