//HTTP METHODS
//DO npm init then "npm install express"
//Then node modules and package-lock.json is downloaded
//get,post,put,delete are operations of REST API(API especially for web development)
//GET(Read),POST(Create),PUT(Update),DELETE(delete)
//Express is a framework for node.js
//Provides middlewares,routing,templating,faster development
//To see status of http code goto network and see status
//HTTP codes
//1xx-Informational
//2xx-Success
//3xx-Redirection
//4xx-Client side error
//5xx-Server side error
const express = require("express"); //to get the packages
const app = express(); //to initialise express

app.get("/", (req, res) => {
  //'/' is for routing(path setting)
  console.log(res.statusCode); //200 in terminal ie success
  res.send("Hello Expess.js world"); //displayed in the chrome(localhost:3000)
});

app.get("/profile", (req, res) => {
  console.log(res.statusCode);
  res.send("Hello Expess.js profile world"); //(localhost:3000/profile) displays this output
});

app.post("/profile", (req, res) => {
  console.log(res.statusCode);
  res.send("Hello Expess.js post node world");
});

app.put("/profile2", (req, res) => {
  console.log(res.statusCode);
  res.send("Hello Expess.js put world");
});

app.delete("/profile3", (req, res) => {
  console.log(res.statusCode);
  res.send("Hello Expess.js delete world");
});

app.listen(3000, () => {
  console.log("Our first express app is running at localhost:3000"); //displayed in the terminal
});
