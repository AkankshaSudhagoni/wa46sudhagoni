var express = require('express');
var router = express.Router();
var sudh=0;

/* GET home page. */
router.get('/', function(req, res, next) {
    sudh=sudh+1;
  res.render('mydata', { title: 'Akanksha Sudhagoni' });
});

module.exports = router;
