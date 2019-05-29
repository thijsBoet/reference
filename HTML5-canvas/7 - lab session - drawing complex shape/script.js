window.onload = function (){

  //Definitions
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  //First
  context.beginPath();
  context.lineCap="but";
  context.lineJoin="miter";
  context.shadowColor="blue";
  context.shadowBlur=10;
  context.shadowOffsetX=10;
  context.shadowOffsetY=10;
  context.strokeStyle="red";
  context.lineWidth=15;
  context.moveTo(60,80);
  context.lineTo(160,80);
  context.lineTo(80,180);
  context.lineTo(180,180);
  context.stroke();

  //Second
  context.beginPath();
  context.lineCap="round";
  context.lineJoin="round";
  context.shadowColor="yellow";
  context.shadowBlur=10;
  context.shadowOffsetX=10;
  context.shadowOffsetY=10;
  context.strokeStyle="blue";
  context.lineWidth=15;
  context.moveTo(340,80);
  context.lineTo(240,80);
  context.lineTo(340,180);
  context.lineTo(240,180);
  context.stroke();

  //Third
  context.beginPath();
  context.lineCap="square";
  context.lineJoin="bevel";
  context.shadowColor="red";
  context.shadowBlur=10;
  context.shadowOffsetX=10;
  context.shadowOffsetY=10;
  context.strokeStyle="green";
  context.lineWidth=15;
  context.moveTo(420,80);
  context.lineTo(520,80);
  context.lineTo(440,180);
  context.lineTo(540,180);
  context.stroke();
};
