'use strict';

var express = require('express');
var router = require("./api");
var parser = require("body-parser");
var app = express();

require("./database");
require("./seed");
app.use('/', express.static("public"));
app.use(parser.json());
app.use("/api", router);

//nodemon message
app.listen(3000, function () {
  console.log("The frontend server is running on localhost:3000.");
});

