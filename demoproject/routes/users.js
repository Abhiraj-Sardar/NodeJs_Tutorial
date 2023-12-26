// establishing connection with mongodb
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro"); // here practicekaro is the database name

//creating schema
const userschema=mongoose.Schema({
  username:String,
  name:String,
  age:Number
});

//creating model and exporting

module.exports=mongoose.model("user",userschema);//this actually creates a table with the name user having schema userschema and exporting it.