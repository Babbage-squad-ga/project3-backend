'use strict';


var Result = require('../models').model('Result');

module.exports = {
    deny : function(req, res) {
        res.sendStatus(405);
    },
    makenew : {
        post : function(req, res, next) {
            if(!req.body || !req.body.surveyname || !req.body.surveyquestion ) {
                var err = new Error("Empty fields.");
                return next(err);
            }

            var pResults = new Promise(function(res, rej) {
                Result.create({
                    surveyName : req.body.surveyname,
                    surveyQuestion : req.body.surveyquestion

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
    },


    update : {
        patch : function(req, res, next) {
            if(!req.body || !req.body.takerage || !req.body.takercity || !req.body.takernickname || !req.body.surveyanswer || !req.body.surveyname ) {
                var err = new Error("Empty fields.");
                return next(err);

            };
            var pResults = new Promise(function(req, res) {



                Result.update({surveyname : req.body.surveyname},
                    {$push: {
                      takerAnswers: {takerage: req.body.takerage, takercity: req.body.takercity , takeranswer: req.body.surveyanswer,}
                  }});

            }).catch(function(error) {
                next(error);
            });



        pResults.then(function() {
            res.sendStatus(200);
        }).catch(function(err) {
            next(err);
        });
    }
}


};
