'use strict';
const express = require('express');
const app = express();

// define all endpoints here
// endpoint to hello.js
app.get('\hello', function(req, res){
    res.type('text');
    res.send('Hello World!');
}); 

// Exercise 1: Splendid Circles
app.get('/math/circle/:r', (req, res) => {
    const r = Number(req.params.r);
  
    const result = {
      area: Math.PI * r * r,
      circumference: Math.PI * 2 * r
    };
  
    res.type('json');
    res.json(result);
  });

  // Exercise 2
  app.get('/hello/name', (req, res) => {
    const {first, last } = req.query;
    const missing = [];

    if(!first) missing.push('first');
    if(!last) missing.push('last');

    if(missing.length > 0) {
      return res
        .status(400)
        .type('text')
        .send(`Missing Required GET parameters : ${missing.join(', ')}`);
    }

    res.type('text');
    res.send(`Hello ${first} ${last}`);
  });
  
  app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
  });