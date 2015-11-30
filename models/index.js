'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.model('User', require('./User'));
mongoose.model('Survey', require('./Survey'));

mongoose.connect("mongodb://localhost/passport-lesson");

module.exports = mongoose;
