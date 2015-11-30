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
  takerAge : {
    type : String,
    required : true
  },
  takerCity : {
    type : String,
    required : true
  },
  surveyQuestion : {
    type : String,
    required : true
  },
  takerAnswer : {
    type: String,
    required : true

  }
});

//resultsSchema.plugin(uniqueValidator);


module.exports = resultsSchema;
