var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mapa', { title: 'Express' });
});

module.exports = router;