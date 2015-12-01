'use strict';

// req.user.userName
// req.user.id   _id

var Survey = require('../models').model('Survey');
var randomBytes = require('randombytes');


module.exports = {
    deny : function(req, res) {
            res.sendStatus(405);
    },
    makenew : {
        post : function(req, res, next) {
            if(!req.body || !req.body.surveyname || !req.body.surveyquestion) {
                var err = new Error("Empty fields.");
                return next(err);
            }

            var pSurvey = new Promise(function(res, rej) {
                var rBytes = randomBytes(16);
                var randomURL =
                    rBytes.reduce(function(previousValue, currentValue) {
                        return previousValue + currentValue.toString(16);
                        },"");

                var splitAnswers = req.body.surveyanswers.split("/*/");
                Survey.create({
                    surveyName : req.body.surveyname,
                    surveyQuestion : req.body.surveyquestion,
                    surveyURL: randomURL,
                    surveyAnswers: splitAnswers,
                    surveyCreator: "TBD"

                }, function(err, user) {
                    if(err) {
                        rej(err);
                        return;
                    }

                    res(user);
                });
            });
            pSurvey.then(function() {
                res.sendStatus(200);
            }).catch(function(err) {
                next(err);
            });
        }
    },

    survey : {
    get : function(req, res) {


        // Survey.find({_id:"565cb466f29f770c1a23fb28"}, { __v: 0 }).exec().then(
        // Survey.find({_id:"565cb466f29f770c1a23fb28"}).exec().then(
        // Survey.find().exec().then(
            Survey.findOne().exec().then(
        // Survey.find({surveyURL:"ZXY"}).exec().then(
             function(survey) {
                res.json(survey);
          }).catch(function(error) {
            next(error);
          });


        // res.json({
        //         title : (req.user && req.user.userName) || 'Nobody'
        //     });

        }
    }
};
