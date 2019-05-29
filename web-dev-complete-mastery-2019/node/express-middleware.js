const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("<h1>Hello</h1>");
    next();                 // use next to continue app
});


app.get('/', (req, res) => {
    res.send('test test');
});

app.listen(3000);