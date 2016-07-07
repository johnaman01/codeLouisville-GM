'use strict';

var express = require('express'),
    catalog = require('./json/catalog.json');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index');
  });

app.get('/catalog/:name?', function(req, res) {
  var name = req.params.name;
  if (name === undefined) {
    res.status(503);
    res.send("This creature is not yet or extinct!");
  } else {
    var creature = catalog[name] || {};
    res.render('cat', {creature: creature});
    }
  });

app.listen(3000, function () {
  console.log("The frontend server is running on localhost:3000.");
  });

