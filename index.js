var express = require('express');
var serveStatic = require('serve-static');
var app = express()
  .use(serveStatic('public'))
  .listen(process.env.PORT, function () {
    console.log('Static file server listening on *:' + process.env.PORT);
  });