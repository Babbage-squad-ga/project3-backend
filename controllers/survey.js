'use strict';

// req.user.userName
// req.user.id   _id

var Survey = require('../models').model('Survey');

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
                console.log(req.body);
                var splitAnswers = req.body.surveyanswers.split("/*/");
                console.log(splitAnswers);
                Survey.create({
                    surveyName : req.body.surveyname,
                    surveyQuestion : req.body.surveyquestion,
                    surveyURL: req.body.surveyurl,
                    surveyAnswers: splitAnswers,
                    surveyCreator: req.body.surveyowner

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
    }
};
