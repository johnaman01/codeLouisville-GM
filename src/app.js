'use strict';

var express = require('express'),
    catalog = require('../public/mock/catalog.json'),
    app = express();

app.use("/public", express.static("public"));
app.use("/assets", express.static("assets"));
console.log("/..public");
//catalog mock
app.get('/public/mock/catalog/:name?', function(req, res) {
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

