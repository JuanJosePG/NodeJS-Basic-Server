const express=require("express");
const app=express();

app.get("/",function(req,res){
  res.end("Welcome to my site!");
})

app.get("/complement",function(req,res){
  res.end("bla bla bla");
})

app.listen(3000)
console.log("listening on http://localhost:3000");