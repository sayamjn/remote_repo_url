var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET ABOUT page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET SERVICES page. */
router.get('/services', function(req, res, next) {
  res.render('services');
});

/* GET DOCTORS page. */
router.get('/doctor', function(req, res, next) {
  res.render('doctors');
});

/* GET BLOGS page. */
router.get('/blogs', function(req, res, next) {
  res.render('blogs');
});


/* GET CONTACT page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
