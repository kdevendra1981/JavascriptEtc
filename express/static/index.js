const express = require("express")
const app = express();
const port = 80;

app.get("/",(req,res)=>{
    res.send("This is my first app with express");
});
app.get("/about",(req,res)=>{
    res.status(200).send("This is my first app about page with express");
});
app.get("/this",(req,res)=>{
    res.status(404).send("Error: Page not found");
});
app.post("/about",(req,res)=>{
    res.send("This is post requiest of my first app about page with express");
});
app.listen(port,()=>{
    console.log(`the application started succesfully on port ${[port]}`);
});