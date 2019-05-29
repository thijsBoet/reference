const fs = require('fs');

fs.readFile('./read-fs.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log('1 => Async', data.toString('utf8'));
});

const file = fs.readFileSync('./read-fs.txt');
console.log('2 => Sync', file.toString());

// APPEND to txt file
// fs.appendFile('./read-fs.txt', '\nappended text with .appendFile method', err => {
//     if (err) {
//         console.log(err)
//     }
// });

// WRITE new text file
// fs.writeFile('bye.txt', 'Sad to see you go.', err => {
//     if (err) {
//         console.log(err)
//     }
// })

// DELETE
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err);
    }
    console.log('deleted bye.txt')
})