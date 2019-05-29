
function printTotalSpeed (kmh){
    let total = 0;
    for (i=0; i<Infinity; i++){
        total += kmh;
    }
}

let totSpeed = window.setInterval(printTotalSpeed(230), 1000));

console.log(totSpeed);


