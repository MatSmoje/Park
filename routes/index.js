var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Encuentra tu estacionamiento!' });
});

router.get('/login', function(req, res, next) {
      res.send('login')
});
router.get('/register', function(req, res, next) {
      res.render('register', { title: 'Encuentra tu estacionamiento!', layout: 'registerLayout' });
});

router.get('/quienesSomos', function(req, res, next) {
      res.render('quienesSomos', { title: 'Encuentra tu estacionamiento!', layout: 'quienesSomosLayout' });
});

router.get('/resultados', function(req, res, next) {
  res.send('Resultados de busqueda');
});

module.exports = router;
