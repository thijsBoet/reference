/* ---------------------------------------- Traversing the DOM --------------------------------------------*/
let itemList = document.querySelector('#items');
// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';

console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

// children
console.log(itemList.children);                             // better ignores trailing spaces aka trailing text nodes

console.log(itemList.children[0]);
itemList.children[1].style.background = 'yellow';

// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'firstElementChild ';

// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'lastElementChild ';

// nextElementSibling
console.log(itemList.nextElementSibling);
itemList.nextElementSibling.textContent = 'nextElementSibling ';

// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent = 'previousElementSibling ';

// createElement
let newDiv = document.createElement('div');

// add class
newDiv.className = 'class';

// add id
newDiv.id = 'id';

// setAttribute
newDiv.setAttribute('title', 'attribute');

// createTextNode
let newDivText = document.createTextNode('newDivText');
newDiv.appendChild(newDivText);

console.log(newDiv);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

// insert into DOM
container.insertBefore(newDiv, h1);                             // (content = newDiv, insertBefore = h1)

newDiv.style.fontSize = '30px';