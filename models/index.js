'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.model('User', require('./User'));
mongoose.model('Survey', require('./Survey'));
mongoose.model('Result', require('./Result'));

mongoose.connect(process.env.MONGOLAB_URI);

module.exports = mongoose;
