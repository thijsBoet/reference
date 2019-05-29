const date = new Date();
const secsStart = date.getSeconds();
const minsStart = date.getMinutes();
const hoursStart = date.getHours();

function secsPast(secsStart){
    let secsPast = secsStart - date.getSeconds();
    console.log(secsPast);
}

// let minPast = setInterval(function(minsStart){
//     return minsStart - date.getMinutes();
// },1000);

setInterval(secsPast(), 1000);
