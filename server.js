const express = require('express');
const app = express();
const fs = require('fs');

let stringifyFile;

app.get('/getNote', (req, res) => {
  fs.readFile('./test.json', 'utf8', (err, data) => {
    if (err) throw err;
    stringifyFile = data;
    res.send(data);
  });
});

app.use('/updateNote/:note', (req, res) => {
  stringifyFile = req.params.note;
  fs.appendFile('./test.json', stringifyFile, err => {
    if (err) throw err;
    console.log('file updated');
  });
});

app.listen(3000);
