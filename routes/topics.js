/* jshint node: true */

(function () {
  'use strict';

  var express = require('express');
  var router = express.Router();
  var topics = require('../topics.json').topics;

  router.get('/', function(req, res) {
    res.json(topics);
  });

  router.get('/:id', function(req, res, next) {
    var topic = topics.find(function (topic) {
      return topic.id === req.params.id;
    });

    if (!topic) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
      return;
    }

    res.json(topic);
  });

    module.exports = router;
})();

