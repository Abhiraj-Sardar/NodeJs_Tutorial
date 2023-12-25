const express=require('express');
var app=express();

app.set("view engine","ejs"); //by this we are telling node that we are going to use ejs 
app.use(express.static('./public')); //this public path will automatically added at first of the path
app.get("/",function(req,res){
    res.render("index"); //here we used render instead of send //here index means index.ejs under views
});

app.get("/contact",function(req,res){
    res.render("contact",{phone:9072533531}); //sending value 
});

app.listen(3000);
