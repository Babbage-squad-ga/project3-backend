'use strict';


var express = require('express');
var router = express.Router();
var resultsCtrl = require('../controllers/result');

/* GET home page. */
//router.get('/', resultsCtrl.root.get);

router.route('/makenew').
  get(resultsCtrl.deny).
  post(resultsCtrl.makenew.post);

module.exports = router;
