'use strict';


var Result = require('../models').model('Result');

module.exports = {
    deny : function(req, res) {
            res.sendStatus(405);
    },
    makenew : {
        post : function(req, res, next) {
            if(!req.body || !req.body.surveyname || !req.body.surveyquestion || !req.body.takerage ||
                !req.body.takercity || !req.body.takeranswer) {
                var err = new Error("Empty fields.");
                return next(err);
            }

            var pResults = new Promise(function(res, rej) {
                console.log(req.body);
                Result.create({
                    surveyName : req.body.surveyname,
                    takerAge : req.body.takerage,
                    takerCity : req.body.takercity,
                    surveyQuestion : req.body.surveyquestion,
                    takerAnswer: req.body.takeranswer


                }, function(err, user) {
                    if(err) {
                        rej(err);
                        return;
                    }

                    res(user);
                });
            });
            pResults.then(function() {
                res.sendStatus(200);
            }).catch(function(err) {
                next(err);
            });
        }
    }
};
