function Shape(color){                                  // Circle has to have a color property too
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle3(radius, color){
    Shape.call(this, color);                            // We call the Shape function without 
                                                        // creating a new instance of Shape
                                                        // aka super constructor
    this.radius = radius;
}

Circle3.prototype = Object.create(Shape.prototype);     // Circle 3 now inherits Shapes prototype methods 'duplicate'
                                                        // aka prototypical inheritance
Circle3.prototype.constructor = Circle3;                // => Important best practice

Circle3.prototype.draw = function(){
    console.log('draw');
}

// Extend prototypical inheritance with a function === intermadiate Function Inheritance
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Square, Shape);

function Square(size){
    this.size = size;
}

const s = new Shape;
const c3 = new Circle3(1);                              // radius 1 => draw => shape method 'duplicate'
const sq = new Square(10);

// Problem with this implimentation when changing constructor =>
// new Circle3.prototype.constructor(1) === new Circle(1); =>
// Circle3 will return the shape function, but no circle function, 
// because we reset the circle function by using new Circle3.prototype(1)
// We could no longer create Circle3 objects in a dynamic fashion

// Best Practice
// Whenever reseting the prototype of an Object, also reset the constructor function =>
// Circle3.prototype.constructor = Circle3;

// Method override
Circle3.prototype.duplicate = function(){
    // To call original duplicate method
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}
const c4 = new Circle3(1); 
console.log(c4.duplicate);                              // duplicate circle

// Polymorphism === different implementation of same method
Square.prototype.duplicate = function(){
    console.log('duplicate square');
}

const shapes = [
    new Circle3(),
    new Square()
];

for (let shape of shapes)
    shape.duplicate();

// Mixins
const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function(){
        console.log('walking');
    }
};

const canSwim = {
    swim: function(){
        console.log('swimming');
    }
}

function Dog(){
}
// assign objects to objects
Object.assign(Dog.prototype, canEat, canWalk);          // Dog.prototype can also be an empty object {}

const dog = new Dog();
console.log(dog);

function Goldfish(){
}

// assign objects to objects with a function
function mixin(target, ...sources){
    Object.assign(target, ...sources);
}

mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);
// Use mixins to combine multiple objects 