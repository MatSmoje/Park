var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resouasdasdrce');
});
router.get('/cool', function(req, res, next) {
  res.send('users cools');
});
router.get('/cooler', function(req, res, next) {
  res.send('coolers');
});

module.exports = router;
