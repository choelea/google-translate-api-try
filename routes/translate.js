const translate = require('google-translate-api');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, response, next) {
    console.log('comming...........' + req.body.tt)
    translate(req.body.tt, { to: 'en' }).then(res => {
        console.log(res.text);
        response.json({text: res.text});
    }).catch(err => {
        response.json({text: err.message});
    });
});

module.exports = router;
