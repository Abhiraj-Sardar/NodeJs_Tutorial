//creating an ascii art project
//installing the package-- npm i figlet
var figlet=require("figlet");
figlet("Abhiraj Sardar",function(err,data){
    if(err){
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});