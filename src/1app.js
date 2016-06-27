'use strict';

var express = require('express'),
    catalog = require('./mock/catalog.json');

var app = express();

app.get('/', function (req, res) {
  res.send('<h1>hey there</h1>');
  });

app.get('/catalog', function(req, res) {
  res.send(catalog);
  });

app.listen(3000, function () {
  console.log("The frontend server is running on localhost:3000.");
  });

