window.onload = function (){

  //Definitions
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  /*
  Line Caps -> context.lineCap ="";
  - butt
  - round
  - square
  */

  //first lineCap butt
  context.beginPath();
  context.lineCap="butt";
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(100,100);
  context.lineTo(300,100);
  context.stroke();

  //second lineCap round
  context.beginPath();
  context.lineCap="round";
  context.strokeStyle = "blue";
  context.lineWidth = 10;
  context.moveTo(100,125);
  context.lineTo(300,125);
  context.stroke();

  //third lineCap square
  context.beginPath();
  context.lineCap="square";
  context.strokeStyle = "green";
  context.lineWidth = 10;
  context.moveTo(100,150);
  context.lineTo(300,150);
  context.stroke();
};
