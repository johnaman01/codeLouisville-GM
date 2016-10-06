'use strict';

var express = require('express'),
    catalog = require('./public/json/catalog.json'),
    app = express();

//view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

//serving static files
app.use(express.static('public'));
//routes
app.get('/', function (req, res) {
  res.render('index');
});
  //home
app.get('/index', function (req, res) {
  res.render('index');
});
  //table
app.get('/table', function (req, res) {
  res.render('table');
});
  //blanklog
app.get('/blanklog', function (req, res) {
  res.render('blanklog');
}); 
  //fetch creature by name
app.get('/catalog/:name?', function(req, res) {
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

