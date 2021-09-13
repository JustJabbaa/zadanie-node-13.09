const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Adrian Kotowski')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
const square = require('./square');
console.log
app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
  });