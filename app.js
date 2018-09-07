var express = require('express');
var app     = express();
var path    = require('path');
app.use(express.static('public'));



app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //It will find and locate index.html from View or Scripts
});

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index1.html'));
  //It will find and locate index.html from View or Scripts
});


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/login.html'));
});


app.listen(3000);

console.log("Port 3000");