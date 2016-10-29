'use strict';

var express = require('express'),
    catalog = require('./public/json/catalog.json'),
    app = express();
//set view engine
app.set('view engine', 'html');
//serve static files in views
app.use(express.static('views'));
//serve static files in node_modules
app.use("/styles", express.static(__dirname + "/node_modules/bootstrap/dist/css/"));
//serve static files (angular) in node_modules
app.use("/scripts", express.static(__dirname + "/node_modules/angular/"));
//get
app.get('/', function (req, res) {
  res.render('index');
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

