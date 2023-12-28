//if you login is valid thaen user will redirect to profile page otherwise user will redirect to another route
//flash message allows you to use one routes data to another route
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/failed', function(req, res) {
  req.flash("age",12); //setting flash
  res.send("All Done");
});

router.get('/checkflash', function(req, res) {
  console.log(req.flash("age"));//displaing flash
  res.send("Check Your Console");
});

router.get('/create',async function(req,res){ 
  let userdata=await userModel.create({
    username:"Harsh",
    nickname:"Harsh",
    description:"Hey There I am 20 year old",
    categories:["fashion","life","Cosmetics"]
  });
  res.send(userdata);
});

// Q1.How can I perform a case insensitive search in mongoose?

router.get("/find",async function(req,res){
  // new RegExp(search,flags); flags=>i for insensitive
  var regex=new RegExp("^HaRsH$",'i');//please refer regex section in summary.txt
  let user= await userModel.findOne({username:regex});
  res.send(user);
})

//display all user details
router.get("/display",async function(req,res){ 
  let alluser = await userModel.find(); //returns all user details
  res.send(alluser);
});

//Q2.How do i find documents where an array field contains all of a set of values?

router.get("/contain",async function(req,res){ 
  let containUser= await userModel.find({categories:{$all:["fashion","life"]}}); 
  res.send(containUser);
});

//The $all operator selects the documents where the value of a field is an array that contains all the specified elements.

//Q3.How can i search for documents with a specific date range in Mongoose?
router.get("/date",async function(req,res){ 
  var date1=new Date("2023-12-02");//yyyy-mm-dd
  var date2=new Date("2023-12-30");
  let user = await userModel.find({datecreated:{$gte:date1,$lte:date2}}); //$gte => greater than equalto and $lte => less than equalto 
  res.send(user);
});

//Q4. How can i filter documents based on the existence of a field in mongoose?
router.get("/exist",async function(req,res){ 
  let existUser= await userModel.find({categories:{$exists:true}}); 
  res.send(existUser);
});

//Q5.How can i filter documents based on a specific fields length in mongoose?
router.get("/length",async function(req,res){ 
  let User= await userModel.find({
    $expr:{
      $and:[
        {$gte:[{$strLenCP:"$nickname"},0]}, //nickname index starts from 0
        {$lte:[{$strLenCP:"$nickname"},5]}  //nickname index ends at 5
      ]//total nickname length<=6
    }
  }); 
  res.send(User);
});



module.exports = router;