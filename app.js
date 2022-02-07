const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");



const app=express();

var port=process.env.PORT || 7000;

var path = require("path");

app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({
  extended:true
}));
 
mongoose.connect(db, {useNewUrlParser:true});
const userSchema=new mongoose.Schema({
   email:String,
   password:String,
});










app.get("/", function(req,res){
    res.sendFile(path.join(__dirname+ '/index3.html'));
  });
  
  app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname+ '/about.html'));
  });  
  
  app.get("/resume", function(req,res){
    res.sendFile(path.join(__dirname+ '/resume.html'));
  });
  
  app.get("/portfolio", function(req,res){
    res.sendFile(path.join(__dirname+ '/portfolio.html'));
  });
  app.get("/blog", function(req,res){
    res.sendFile(path.join(__dirname+ '/blog.html'));
  });
  app.get("/contact", function(req,res){
    res.sendFile(path.join(__dirname+ '/contact.html'));
  });
  app.get("/map", function(req,res){
    res.sendFile(path.join(__dirname+ '/map.html'));
  });
  app.get("/map-2", function(req,res){
    res.sendFile(path.join(__dirname+ '/map-2.html'));
  });
  

  
  app.post("/login", function(req,res){
    const username=req.body.username;
    const password=req.body.password;
  
    User.findOne({email:username}, function(err, foundUser){
      if (err){
        console.log(err);
      }else{
        if (foundUser){
          if (foundUser.password===password){
            res.sendFile(path.join(__dirname+ '/chillpill2.html'));
          }
      }
      }
    });
  });

app.listen(port,function() {
    console.log("Server started on port 7000.");
  });

