window.onload = function (){

  //Definitions
  var canvas = document.getElementById('line-canvas');
  var context = canvas.getContext("2d");

  //Draw line steps
  context.beginPath();       //reset the context state !IMPORTANT DO NOT FORGET
  context.strokeStyle="red"; //line color.
  context.lineWidth=10;      //width.
  context.moveTo(30,70);     //moveTo(x,y) -> starting point of line.
  context.lineTo(130,70);    //line(x,y)   -> end point of the line.
  context.stroke();          //draws the line.
}
