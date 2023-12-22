//install express by --- npm i express

const express = require('express');
const app=express();

//bydefault root directory or route is '/'
app.get('/',function(req,res){
    res.send('Hello World'); //sending response 
});

app.listen(3000);//server listen at port 3000

//now run this file at console and go to localhost:3000 to see output