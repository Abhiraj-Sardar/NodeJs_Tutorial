//middleware is used to perform task before the request goes to the directory or route from the server just see the below flow--
//client(request)
//  ||
//  \/
//server
//  ||
//  \/
//middleware
//  ||
//  \/
//directory or route(ex: /profile or /home)
//  ||
//  \/
//server
//  ||
//  \/
//client(response)

const express=require('express');
var app=express();

//for root directory
app.get("/",function(req,res){
    res.send("it is  the root directory");
});

//middleware 
app.use(function(req,res,next){
    console.log("Middleware 1");
    next();//used to call to the next middleware right after this . if that is not available then to call the route
});

//for home directory
app.get("/home",function(req,res){
    res.send("welcome home");
});

//middleware 
app.use(function(req,res,next){
    console.log("Middleware 2");
    next();//used to call to the next middleware 
});


//for profile directory
app.get("/profile",function(req,res){
    res.send("Your Profile");
}); 

app.listen(3000);

//after running when you try to go "/home" this will print "Middleware 1" and
// when "/profile" this will print "Middleware 1 Middleware 2" first be executed then the directory will be reached