'use strict';

var express = require('express'),
    catalog = require('./mock/catalog.json');

var app = express();

app.get('/', function (req, res) {
  res.send('<h1>hey there!!!</h1>');
  });

app.get('/catalog/:name?', function(req, res) {
  var name = req.params.name;
  if (name === undefined) {
    res.status(503);
    res.send("This creature is not yet or extinct!");
  } else {
    var creature = catalog[name];
    res.send(creature);
    }
  });

app.listen(3000, function () {
  console.log("The frontend server is running on localhost:3000.");
  });

