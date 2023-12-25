const express=require('express');
var app=express();

app.set("view engine","ejs");

app.use(express.static('./public')); 


app.get("/",function(req,res){
    res.render("index"); 
});

app.get("/error",function(req,res,next){
    throw Error("Something went wrong 1");
});

app.get("/contact",function(req,res){
    res.render("contact",{phone:9072533531}); 
});

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  });

app.listen(3000);
