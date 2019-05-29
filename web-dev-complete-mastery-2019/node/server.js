// const fs = require('fs')                 // built-in modules
// const nodemon = require('nodemon');      // installed npm modules
// const importJs = require('import.js')    // created modules

// const a = importJs.largeNumber;
// const b = 5;

// setTimeout(() => {
//     console.log(a + b);
// }, 1000);

// console.log(__dirname);


//*********************************/
// const http = require('http');

// const server = http.createServer((req, res) => {
//     // console.log('headers ', req.headers)
//     // console.log('method ', req.method)
//     // console.log('url ', req.url)
//     const user = {
//         name: 'John',
//         hobby: 'Skating',
//     }

//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(user));
// })

// server.listen('3000');

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
// app.use(express.static(__dirname + "/public")); <= load static assets such as index.html

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    // console.log(req.query); //   http://localhost:3000/?name=matthijs&age=38
    // req.body
    // console.log(req.header)
    // console.log(req.params)
    res.send("GET => root");
    // res.status(404).send("not found");
});

// app.get('/profile', (req, res) => {
//     res.send("GET => profile");
//     //  res.send(user);
// });

// app.post('/profile', (req, res) => {
//     console.log(req.body)
//     const user = {
//         name: 'Sally',
//         hobby: 'Soccer',
//     }
//     res.send('Success');
// });

app.listen(3000);