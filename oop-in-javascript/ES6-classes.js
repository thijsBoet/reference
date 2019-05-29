// Private variable
const _radius = Symbol();               // Symbol is an unique identifier
Symbol() === Symbol() // is False
const __radius = new WeakMap();         // =>dictionary where keys are objects and values can be anything
                                        // aka weak keys no normal numerical keys
const __move = new WeakMap();

// Class declaration
class CircleClass {                     // are hoisted to the top of the code, never out of scope
    constructor(radius){
        __radius.set(this, radius);     // set weakmap values key=this object, value=radius
        __move.set(this, () => {
            console.log('move', this);
        });
        this[_radius] = _radius;
        this.radius = radius;
        this.move = function(){}        // If you dont't want to create the method on the prototype object
    }
    // Instance Method === Ready on instance of a class
    draw(){                             // no function keyword and outside constructor to create new method
        console.log(__radius.get(this));// get value of Weakmap private value
        __move.get(this)();             
        console.log('draw');
    }
    // Static Method === Ready without instantiation of the class
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new CircleClass(radius);
    }
}

const cc = new CircleClass(1);
console.log(typeof(CircleClass));       // === function 

const cJson = CircleClass.parse('{"radius":1}');
console.log(cJson);

// Function declaration 
function sayHello() {}                  // are hoisted to the top of the code, never out of scope

// Function explession
const sayGoodbye = function() {};       // are not hoisted to the top of the code

const Circle_contruct = function(){
    this.draw = function () {
        console.log(this);
    }
};

const circle_contruct = new Circle_contruct();
// Method call => calling a function on an object
circle_contruct.draw();                 // => Circle

const draw = circle_contruct.draw;
circle_contruct.draw();                 // => Draw

draw();// => Window object => forgot to use new keyword circle_contruct.draw therfore new object in global scope
