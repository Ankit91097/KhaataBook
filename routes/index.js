var express = require('express');
var router = express.Router();
const fs = require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir(`./hissab`, function(err,files){

    res.render('index', {files:files});
  })
});
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Express' });
});

module.exports = router;
