//Definitions
var canvas = document.getElementById('hello-world-canvas');
var context = canvas.getContext("2d");

//Blue rectangle
context.fillStyle ="blue";
context.fillRect(10,40,30,70);

//Yellow rectangle
context.fillStyle="yellow";
context.fillRect(50,30,60,30);

//Orange rectangle
context.fillStyle="Orange";
context.fillRect(100,60,50,100);
