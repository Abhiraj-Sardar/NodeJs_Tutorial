var express = require('express');
var router = express.Router();
//here the process is same only we used router.get instead of app.get
router.use(express.static("/public"));
router.get("/",function(req,res){
  res.render("index");//refers index.ejs under views
});

module.exports = router;
