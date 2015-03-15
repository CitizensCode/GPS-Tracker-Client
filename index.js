var connect = require('connect');
var http = require('http');
var compression = require('compression');
var oneDay = 86400000;

var app = connect()
  .use(connect.static(__dirname + '/public', {
    maxAge: oneDay
  }))
  .use(compression());