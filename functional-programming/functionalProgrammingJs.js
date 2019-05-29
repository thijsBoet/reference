/*higher-order function*/
var animals = [{
        name: "Milo",
        species: "gremlin"
    },
    {
        name: "Gizmo",
        species: "mogwai"
    },
    {
        name: "John Louie",
        species: "human"
    },
    {
        name: "Billy Peltzer",
        species: "human"
    },
    {
        name: "E.T.",
        species: "alien"
    },
    {
        name: "Yoda",
        species: "alien"
    },
    {
        name: "Chewbacca",
        species: "alien"
    },
    {
        name: "Han Solo",
        species: "human"
    },
    {
        name: "Groot",
        species: "alien"
    },
    {
        name: "Beethoven",
        species: "dog"
    },
    {
        name: "Buddy",
        species: "dog"
    },
    {
        name: "Puss",
        species: "cat"
    },
    {
        name: "Garfield",
        species: "cat"
    },
    {
        name: "Bolt",
        species: "dog"
    },
    {
        name: "Stuart Little",
        species: "mouse"
    }
];

/* old way without higher-order function */
var dogs = [];
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === "dog") {
        dogs.push(animals[i]);
    }
}
console.log(dogs);

/* higher-order function aka function within function*/
var aliens = animals.filter(function (animal) {
    return animal.species === "alien";
});
console.log(aliens);

/* refactored ES6 arrow function */
var aliensArrow = animals.filter((animal) => animal.species === "alien");

/* Old way before map method */
var names = [];
for (var i = 0; i < animals.length; i++) {
    names.push(animals[i].name);
}
console.log(names);

/* Map function */
var namesMap = animals.map(function (animal) {
    return animal.name + " is a " + animal.species;
});
console.log(namesMap);

/* Map function with template literal*/
var namesMap = animals.map(function (animal) {
    return `${animal.name} is a ${animal.species}`;
});

/* Map function with arrow function and template literal*/
var namesMap = animals.map((animal) => `${animal.name} is a ${animal.species}`);

var orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];

/* old way with for loop*/
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}
console.log(totalAmount);

/* easier with reduce method */
var totalAmount = orders.reduce(function (sum, order) {
    console.log(sum, order); // iterations 
    return sum + order.amount; // sum=0+250+400+100+325
}, 0); // initialized sum object value set at 0, aka starting value of sum is 0
console.log(totalAmount);

/* easier with reduce method and fat arrow function */
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

/* OBJECT LITERAL End result importing data.txt 
{
    "mark johansson": [
        {name: "waffle iron",  price: "80", quantity: "2"},
        {name: "blender",  price: "200",  quantity: "1"},
        {name: "knife",  price: "10",  quantity: "4"},
    ],
    "nikita smith": [
        {name: "waffle iron",  price: "80",  quantity: "1"},
        {name: "knife",  price: "10",  quantity: "2"},
        {name: "pot",  price: "20",  quantity: "3"},
    ]
} */

/* Bug on import fs
import fs from 'fs';
var output = fs.readFileSync("data.txt", "utf8")
    .trim()
    .split("\n")
    .map(line => line.split("\t"))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers;
    }, {});
console.log("output", JSON.stringify(output, null, 2)); */

/* Closures */
var me = "Bruce Wayne";

function greetMe() {
    console.log(`Hello, ${me}!`);
}
greetMe(); //greetMe can read "me" variable although its outside the functions own scope
me = "Batman";
greetMe(); //me value reiterated value as "Batman" => not Pure
const greet = (name) => console.log(`Hello, ${ name }!`); // 

greet("thijs");

function sendRequest() {
    var requestID = "123";
    $.ajax({
        url: "myUrl",
        success: function (response) { //function can read "requestID" variable although its outside the functions own scope 
            alert("Request " + requestID + " returned");
        }
    });
}

/* Currying */
let dragon = (name, size, element) =>
    name + " is a " +
    size + " dragon that breathes " +
    element + "!";
console.log(dragon("fluffykins", "tiny", "lightning"));

/* same function, but now by currying */
let dragonCurry = //dragon is a function,,
    name => //that takes a name and returns an other function,
    size => //called size that takes a size and returns an other function,
    element => //called element that takes an element and returns an argument that,
    name + " is a " + //concatenates all three elements into a string.
    size + " dragon that breathes " +
    element + "!";
console.log(dragonCurry("Hello kitty")("gigantic")("kisses"));

/* Recursion */
const countDownFrom = (num) => {
    if (num === 0) return;
    document.write(`${num} <br>`);
    countDownFrom(num - 1);
}
countDownFrom(10);

let categories = [{
        id: 'animals',
        'parent': null
    },
    {
        id: 'mammals',
        'parent': 'animals'
    },
    {
        id: 'cats',
        'parent': 'mammals'
    },
    {
        id: 'dogs',
        'parent': 'mammals'
    },
    {
        id: 'chihuahua',
        'parent': 'dogs'
    },
    {
        id: 'labrador',
        'parent': 'dogs'
    },
    {
        id: 'dogs',
        'persians': 'cats'
    },
    {
        id: 'siamese',
        'parent': 'cats'
    },
]

const makeTree = (categories, parent) => {
    let node = {};
    categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeTree(categories, c.id))
    return node;
}

console.log(
    JSON.stringify(
        makeTree(categories, null), null, 2)
)

/* Promises */
function loadImage(url) {
    return new Promise((res, rej) => {
        const image = new Image();

        image.onload = function () {
            res(image);
        }

        image.onerror = function () {
            const msg = `Could not load image at ${url}`;
            rej(new Error(msg));
        }
        image.src = url;
    })
}

const addImg = (src) => {
    var imgElement = document.createElement('img');
    imgElement.src = img.src;
    document.body.appendChild(imgElement);
}

Promise.all([
    loadImage('images/cat1.jpg'),
    loadImage('images/cat2.jpg'),
    loadImage('images/cat3.jpg'),
    loadImage('images/cat4.jpg')
]).then((images) => {
    images.forEach(img => addImg(img.src))
}).catch((error) => {

})

/* Functors 

A functor is an object that has a map method.Arrays in JavaScript implement map and are therefore functors.
Promises, Streams and Trees often implement map in functional languages, and when they do, they are considered functors. */

// not a functor doesn't use .map
const addOne = val => val + 1;
const minOne = val => val - 1;

// not a functor || Has to contain any type not just String
const stringFunctor = (val, fn) => {
    const chars = val.split("");
    return chars.map(function (char) {
        return String.fromCharCode(fn(char.charCodeAt(0)))
    }).join("");
}

console.log(stringFunctor("ABC", addOne));
console.log(stringFunctor("ZYX", minOne));

[3, 4].map(addOne) // = [4,5]

const dragons = [{
        name: "Fluffykins",
        health: 70
    },
    {
        name: "Deathlord",
        health: 65000
    },
    {
        name: "Little Pizza",
        health: 2
    }
];

const name = dragons.map(dragon => dragon.name);
console.log(name);

/* Streams */


/* Monad */