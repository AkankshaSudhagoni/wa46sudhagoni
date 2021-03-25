var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let random=Math.floor(Math.random()*100)
  res.render('compute', { result:'Math function applied to'+random+'is'+Math.sin(random)});
});

module.exports = router;