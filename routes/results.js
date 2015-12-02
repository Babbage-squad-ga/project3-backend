'use strict';


var express = require('express');
var router = express.Router();
var resultsCtrl = require('../controllers/result');

/* GET home page. */
router.get('/', resultsCtrl.result.get);

router.route('/makenew').
get(resultsCtrl.deny).
post(resultsCtrl.makenew.post);


router.route('/update').
get(resultsCtrl.deny).
patch(resultsCtrl.update.patch);


router.route('/result').
get(resultsCtrl.deny).
get(resultsCtrl.result.get);

module.exports = router;
