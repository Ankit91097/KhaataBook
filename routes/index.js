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

res.render('create')
 
});
router.get('/read/:filename', function(req, res, next) {

  fs.readFile(`./hissab/${req.params.filename}`,"utf-8",function(err,filedata){
    if(err) return res.send("something went wrong");
    else res.render("hissab",{filedata,filename:req.params.filename});
  })
 
});
router.post('/createhissab', function(req,res,next){
 
const today = new Date();
const date = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const fn = `${date}-${month}-${year}-${req.body.title}.txt`

fs.writeFile(`./hissab/${fn}`,req.body.hissab,function(err){
  if(err) return res.send("something went wrong");
  else res.redirect('/')
})
})
router.get('/edit/:filename',function(req,res,next){
  fs.readFile(`./hissab/${req.params.filename}`,"utf-8",function(err,filedata){
    if(err) return res.send("something went wrong");
    else res.render("edit",{filedata,filename:req.params.filename});
  })
 
})
router.post('/update/:filename',function(req,res,next){
 fs.writeFile(`./hissab/${req.params.filename}`,req.body.hissab,function(err){
  if(err) return res.send("something went wrong");
  else res.redirect('/')
 })
  })
 



module.exports = router;


