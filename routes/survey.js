 'use strict';


var express = require('express');
var router = express.Router();
var surveyCtrl = require('../controllers/survey');

/* GET home page. */
//router.get('/', surveyCtrl.root.get);

router.route('/makenew').
  get(surveyCtrl.deny).
  post(surveyCtrl.makenew.post);

module.exports = router;
