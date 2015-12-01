 'use strict';


var express = require('express');
var router = express.Router();
var surveyCtrl = require('../controllers/survey');

/* GET home page. */
router.get('/', surveyCtrl.survey.get);

router.route('/makenew').
  get(surveyCtrl.deny).
  post(surveyCtrl.makenew.post);

router.route('/survey').
  get(surveyCtrl.deny).
  get(surveyCtrl.survey.get);

module.exports = router;
