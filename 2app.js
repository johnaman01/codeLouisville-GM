'use strict';

var express = require('express'),
    catalog = require('./public/json/catalog.json'),
    app = express();

//serve static files in public
app.use(express.static('public'));
//set view engine
app.set('view engine', 'html');
//
app.get('/', function (req, res) {
  res.render('views/index');
});
//catalog json
app.get('/public/json/catalog/:name?', function(req, res) {
  var name = req.params.name;
  if (name === undefined) {
    res.status(503);
    res.render("blanklog");
  } else {
    var creature = catalog[name] || {};
    res.render('catalog', {creature: creature});
  }
});

//nodemon message
app.listen(3000, function () {
  console.log("The frontend server is running on localhost:3000.");
});

