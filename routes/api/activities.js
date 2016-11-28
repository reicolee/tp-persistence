var Promise = require('bluebird');
var router = require('express').Router();
var Activity = require('.../models/activity');


router.get('/activities', function(req, res, next){
  Activity.findAll()
  .then(function(attractions){
    res.json(attractions);
  });
});


module.exports = router;
