var express = require('express');
var router = express.Router();
const userModel=require("./users"); //importing database

//here the process is same only we used router.get instead of app.get
router.use(express.static("/public"));

router.get("/",function(req,res){
  res.render("index");//refers index.ejs under views
});

//creation of collection(insertion of data) //when you go to this route you can see this created data
router.get("/create",async function(req,res){ 
  const createduser= await userModel.create({ //this is async code so to make it sync so that it sends the below message after the creation we add await keyword before the async code and the function that contains the async code will have async keyword at the first
    username:"Abhiraj",
    age:20,
    name:"Abhiraj"
  });
  res.send(createduser);
});

//display all user details
router.get("/display",async function(req,res){ 
  let alluser= await userModel.find(); //returns all user details
  res.send(alluser);
});

//displaying a particular user data (display tha user data who has username Abhiraj)
router.get("/find",async function(req,res){ 
  let user= await userModel.findOne({username:"Abhiraj"}); //returns user with username Abhiraj if there is no such user this will return Null value //display this as array of objects
  res.send(user);
});

//delete data of a particular user
router.get("/delete",async function(req,res){ 
  let userdelete= await userModel.findOneAndDelete({username:"Abhiraj"}); //returns the data of deleted user with username Abhiraj if there is no such user to delete this will return Null value
  res.send(userdelete);
});

//sessions(please visit app.js first for this)
router.get("/index",function(req,res){
  req.session.ban=true; //storing variable ban with value true
  res.render("index");
})

router.get("/checkban",function(req,res){
 console.log(req.session); //session values can be accessed in multiple routes
  if(req.session.ban===true)
  {
    res.send("You are banned");
  }
  else{
    res.send("not banned");
  }
});

//destroying session
router.get("/removeban",function(req,res){
  req.session.destroy(function(err){
    // console.log(err);
    if(err) throw err;
    res.send("ban removed");
  });
});

//cookie(please visit app.js first for this)
router.get("/setcookie",function(req,res){
  res.cookie("age",20);
  res.render("index");
});

router.get("/readcookie",function(req,res){
  console.log(req.cookies);//you can write req.cookies.age to get the direct value
  res.send("check console");
});

//deleting cookie
router.get("/deletecookie",function(req,res){
  res.clearCookie("age");
  res.send("Cookie Cleared");
});

module.exports = router;
