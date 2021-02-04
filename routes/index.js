var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Contato' });
});

module.exports = router;
