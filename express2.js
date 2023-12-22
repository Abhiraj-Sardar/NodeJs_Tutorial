//create a project where there will be 3 directory root,profile and home. 
//when the user reaches home the webpage display the msg "welcome home",
// at root directory "it is  the root directory" and
// for profile webpage will display "Your Profile" 

const express=require('express');
var app=express();

//for root directory
app.get("/",function(req,res){
    res.send("it is  the root directory");
});

//for home directory
app.get("/home",function(req,res){
    res.send("welcome home");
});

//for profile directory
app.get("/profile",function(req,res){
    res.send("Your Profile");
});

app.listen(3000);


//how to see output
//after running the script go to localhost:3000 
//you can see "it is  the root directory" this as output 
//now at the addressbar after the localhost:3000 write "/home" you will see different output 
//do the same for profile as well