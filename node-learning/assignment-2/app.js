const express = require('express');

const app = express();

// Middleware goes here in between app and server

// app.use('/', (req, res, next) => {
//     console.log('This alway runs!');
//     next();
//  });

app.use('/users', (req, res, next) => {
    res.send('<h1>Welcome to users!</h1>')
 });

app.use('/', (req, res, next) => {
    console.log('This is not the users page');
 });

app.listen(3001);