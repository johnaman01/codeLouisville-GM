'use strict';

var express = require('express'),
    router = require("./api"),
    app = express();

app.use("/public", express.static("public"));
console.log("../public");

app.use("/api", router);

//nodemon message
app.listen(3000, function () {
  console.log("The frontend server is running on localhost:3000.");
});

