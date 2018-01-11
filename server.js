const express = require('express');
const app = express();

app.use('/store', (req, res, next) => {
  console.log('Im middleware to /store');
  next();
});

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/store', (req, res) => res.send('This is shop'));

app.listen(3000);

app.use((req, res, next) => res.status(404).send('404! Page not found!'));
