var express = require('express');
var serveStatic = require('serve-static');
var app = express()
  .use(serveStatic('public'))
  .listen(1337, function () {
    console.log('Static file server listening on *:1337');
  });