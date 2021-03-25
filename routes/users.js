var express = require('express');
var router = express.Router();
var sudh=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  sudh = sudh+1;
  res.send('User accesses are: '+sudh);
});

module.exports = router;