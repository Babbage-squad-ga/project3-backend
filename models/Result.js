 'use strict';

//var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// export a mongoose model

var resultsSchema = new Schema({
  surveyName : {
    type : String,
    required : true
  },
  surveyQuestion : {
    type : String,
    required : true
  },
  takerAnswers : []
});

//resultsSchema.plugin(uniqueValidator);


module.exports = resultsSchema;
