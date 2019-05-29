// JavaScript DOM Crash Course
// https://www.youtube.com/watch?v=0ik6X4DJKCc

console.dir(document);                  // prop methods document object
console.dir(document.domain);           // localhost
console.dir(document.URL);              // complete URL
console.dir(document.title);
document.title = 123;                   // writable

console.dir(document.doctype);
console.dir(document.head);
console.dir(document.body);
console.dir(document.all);              // complete HTML DOM object
console.dir(document.all[10]);          // bad form object keys change
document.getElementsByTagName("title");

console.dir(document.forms);
console.dir(document.forms[0]);

/* -----------------------------------------DOM Selectors --------------------------------------------*/
// getElementById("");
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');

headerTitle.textContent = "Hello";              // less performance heavy
headerTitle.innerText = "Goodbye";              // only returns visible text (not style="display: none;)
headerTitle.innerHTML = "<h3>DOM</h3>";         // most performance heavy inc HTML
headerTitle.style.color = "yellow";             // access css properties
header.style.borderBottom = "solid 3px blue";   // border-bottom in CSS === camelCase borderBottom in js

// getElementsByClassname('');                  // <= PLURAL
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);

// items.style.textContent = 'items';           // does not work is an collection of items

for(let i=0; i<items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4'; // must loop over the items to add property to all
}

// getElementsByTagName('');
let li = document.getElementsByTagName('li');

// querySelector                                                        // <= Singular first item
let container = document.querySelector('.container');                   // can use Id, class, tagname

let input = document.querySelector('input');
input.value= "input.value";

let submit = document.querySelector('input[type="submit"]');            // any CSS selector!!!
submit.value = "SEND";

let firstItem = document.querySelector('.list-group-item');             // querySelector always selects first instance
firstItem.style.color = 'blue';

let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'purple';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

// querySelectorAll
let titles = document.querySelectorAll('.title');                       // Selects instances and returns a node-list
console.log(titles);                                                    // we can run some arrayfunctions on nodelists
titles[0].textContent = "HELLO";

let odd = document.querySelectorAll('li:nth-child(odd)');
for (let i; i<odd.length; i++){
    odd[i].style.backgroundColor= 'white';
}