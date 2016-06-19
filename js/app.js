//Problem: I need a way for user to send and receive creature properties
//Solution: Use Node.js to perform creature look ups and serve our template via HTTP

var router = require('./router.js');
//Create a web server
var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

