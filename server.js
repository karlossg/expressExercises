const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('I got GET request to main page');
  res.send('Hello GET');
});

app.post('/', (req, res) => {
  console.log('I got POST request to main page');
  res.send('Hello POST!');
});

app.delete('/del_user', (req, res) => {
  console.log('I got DELETE request to /del_user');
  res.send('Hello DELETE!');
});

server = app.listen(3000, () => console.log('server listening on: http://localhost:3000'));