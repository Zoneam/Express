const express = require('express');
const app = express();
const path = require('path');
const students = require('./data/students');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/students', function(req, res) {
    res.render('students/index', {
      students: students.getAll()
    });
  });

app.listen(3000, function () {
    console.log('Listening on port 3000');
  });