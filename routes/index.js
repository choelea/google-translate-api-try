var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Google Transalte Try' });
});

module.exports = router;
