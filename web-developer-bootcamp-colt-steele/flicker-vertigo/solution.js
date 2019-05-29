const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const jumbo = document.querySelector(".jumbotron");

var isBlack = false;

setInterval(function(){
    if (isBlack){
        body.style.background = "black";
        jumbo.style.background = "white";
        h1.style.color = "black";
    } else {
        body.style.background = "white";
        jumbo.style.background = "black";
        h1.style.color = "white";
    }
    isBlack = !isBlack;
}, 16.67);