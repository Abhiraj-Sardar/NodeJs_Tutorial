

const express=require('express');
var app=express();

//for root directory
app.get("/",function(req,res){
    res.send("it is  the root directory");
});

//for profile directory
app.get("/profile/:username",function(req,res){ //here username after colon ":" is variable that takes value from the address bar parameter provided by the user after "/profile/Abhiraj" here Abhiraj will be stored in username
    res.send(`Your Profile ${req.params.username}`);//this is the way to access the value of the variable 
}); 

app.listen(3000);
