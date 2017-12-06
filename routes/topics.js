/* jshint node: true */

(function () {
  'use strict';

  var express = require('express');
  var router = express.Router();
  var topics = require('../topics.json').topics;

  router.get('/', function(req, res) {
    res.json(topics);
  });

  module.exports = router;
})();

