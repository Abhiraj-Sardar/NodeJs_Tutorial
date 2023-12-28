var express = require('express');
var router = express.Router();
const userModel=require("./users");//including database connection
// const passport=require("passport-local");//for authentication
// const passport=require("./config/passport")(passport1)
const localStrategy = require("passport-local");//for authentication uses local strategy of authentication
const passport = require('passport');
passport.use(new localStrategy(userModel.authenticate()));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//for authentication (register route)
router.post("/register",function(req,res){
  var userdata=new userModel({
    username:String,
    secret:String
  });

  userModel.register(userdata,req.body.password)
    .then(function(registereduser){//this part creates user account
    passport.authenticate("local")(req,res,function(){ // |
      res.redirect("/profile");                        // | This 2 part login user after creating account or registering
    });//authenticate user based on local strategy
  })
});

//for authentication
router.post("/profile",isLoggedIn,function(req,res){ //process flow: "/profile" => isLoggedIn =>function(req,res)
  res.send("welcome to profile");
})

//for authentication
router.post("/login",passport.authenticate("local",{ //here 
  successRedirect:"/profile", //if successfully logged in
  failureRedirect:"/" //if login fails
}),function(req,res){})

//for authentication
router.get("/logout",function(req,res,next){
  req.logout(function(err){
    if(err) return next(err);
    res.redirect("/");
  })
});

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}

module.exports = router;
