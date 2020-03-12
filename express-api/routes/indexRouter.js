var express = require('express');
var router = express.Router();

/* GET index.html from the public directory
 * 
 * Could be used for a docs page for the API
 *
 * */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Docs' });
});

module.exports = router;
