//"use strict"                              // prevents local variables from going global after calling function

// first rule of this keyword:      global object/context of this === window object
// ================================================================================
console.log(this);                          

// second rule of this keyword:     when declared inside of a declared object it will always be the value of the closest parent object.
// ====================================================================================================================================
var person = {                              
    firstName: "Ellie",
    sayHi: function(){
        return "Hi " + this.firstName;      // value closest parent object === "Ellie"
    },
    determineContext: function(){
        return this === person;             // true, parent object of this === person
    }
};

var person = {                              // when declared inside of a declared object it will always be the value of the closest parent object.
    firstName: "Ellie",
    sayHi: function(){
        return "Hi " + this.firstName;      // value closest parent object === "Ellie"
    },
    determineContext: function(){
        return this === person;             // false, person is out of scope
    },
    dog: {
        sayHello: function(){
            return "Hello" + this.firstName;// value closest parent object = dog = dog.firstName = undefined
        },
        determineContext: function(){
            return this === person;
        }
    }
};

var comments={};

comments.data= ["good job!","Bye","Lame..."];
 
comments.print = function(){
     this.data.forEach(function(el){
         console.log(el);
     });
};
comments.print();

// third rule explicit binding aka:  choose what the context of this will be using: call, apply or bind(only possible to call on functions)
// ========================================================================================================================================
/* 
Name of method      Parameters          Invoked immediately?

Call                thisArg,a,b,c,d     Yes    
Apply               thisArg,[a,b]       Yes
Bind                thisArg,a,b,c,d     No

*/
// Call method
// person.dog.call(person);                     "Hello Colt"
// person.dog.determineContext.call(person);    true

// Used as DRY
var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    }
};

var ellie = {
    firstName: "Ellie"
};

colt.sayHi();                           // Hi Colt
colt.sayHi(ellie);                      // Hi Ellie

// Apply method
var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    addNumbers: function(a,b,c,d){
        return this.firstName + " just calculated " +(a+b+c+d);
    }
};

var ellie = {
    firstName: "Ellie"
};

colt.addNumbers(1,2,3,4);               // Colt just calculated 10
colt.addNumbers.call(ellie,1,2,3,4);    // Ellie just calculated 10
colt.addNumbers.apply(ellie,[1,2,3,4]); // Ellie just calculated 10 (max 2 arguments thisArg and values in an Array)

// Bind method (often used for unknown future values)
var ellieCalc2 = colt.addNumbers.bind(ellie,1,2);
ellieCalc2(3,4);                        // Ellie just calculated 10

var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        }, 1000);
    }
};

colt.sayHi();                           // Hi undefined, because this.firstName is called after 1sec it is now a global object aka window object

var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        }.bind(this), 1000);            // Not call or apply, because they would be invoked immediately resulting in the same undefined
    }
};

// fourth rule: with the new keyword a new object is created out of thin air, with "this" refering to set object
// =============================================================================================================
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var ellie = new Person("Ellie", "Schoppik");