console.log("Welcome to pug tutorial");
const express = require("express");
const path = require("path")
const app = express();
const fs = require("fs")
port = 80;
app.use(express.urlencoded());

app.set('view engine','pug');
app.set("views",path.join(__dirname,'views'));

app.get("/",(req,res)=>{
    res.status(200).render("index.pug",{title:"Welcome to Health Gym",heading:"Join Us Today",msg:"Get 50% discount, Hurry up"});
})
app.post("/",(req,res)=>{
    let info = JSON.stringify(req.body)
    fs.writeFileSync("contect.txt",info)
    let params = {"message":"your form has been submitted successfully"}
    res.status(200).render('index.pug',params)

})

app.listen(port,()=>{
    console.log(`Searver listening at port ${port}`);
})
