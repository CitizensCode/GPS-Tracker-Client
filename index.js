var express = require('express');
var serveStatic = require('serve-static');
var app = express()
  .use(serveStatic('public'))
  .listen(1337);