
const fs = require('fs')

fs.readFile('santa.txt', (err, data) => {
    console.time('q1 = santa-time');
    const directions = data.toString();
    const directionsArray = directions.split("");
    const answer = directionsArray.reduce((acc, currentValue) => {
        if (currentValue === '(') {
            return acc+=1
        } else if (currentValue === ')') {
            return acc-=1
        }
    }, 0)
    console.log(`floor ${answer}`);
    console.timeEnd('q1 = santa-time');
});

fs.readFile('santa.txt', (err, data) => {
    console.time('q2 = santa-time');
    const directions = data.toString();
    const directionsArray = directions.split("");
    let accumulator = 0;
    let anwser2 = 0;
    directionsArray.some(currentItem => {
        if (currentItem === '(') {
            accumulator += 1
        } else if (currentItem === ')') {
            accumulator -= 1
        }
        anwser2++;
        return accumulator <0;
    })
    console.log(`basement entered at ${anwser2}`)
    console.timeEnd('q2 = santa-time');
})