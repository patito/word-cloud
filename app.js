/* jshint node: true */

(function () {
  'use strict';

  var express = require('express');
  var bodyParser = require('body-parser');
  var path = require('path');

  var topics = require('./routes/topics');
  var home = require('./routes/index');

  var app = express();

  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, 'public', 'templates')));
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', home);
  app.use('/api/v1/topics', topics);

  app.use(function(req, res, next) {
    res.status(404);
    res.send({error: "乁₍ッ₎ㄏ"});
  });

  module.exports = app;
})();
