//init code
require('dotenv').config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const database = require('./database');
const userController = require('./controller/userForm');
port = process.env.PORT;



app.use(express.static('./static'));
// app.use(express.static('./static/images'));

//middleware setup
app.set("view engine",'pug');
app.set('views','./views');
app.use(morgan('dev'));
app.use(cors());
app.use('/form_submit',userController)

app.get("/",(req,res)=>{
    console.log(`app.get : ${req.body}`);
    res.status(200).render("home.pug")
});

app.get("/contact",(req,res)=>{
    console.log(`app.get/contact : ${req.body}`);
    res.status(200).render("contact.pug")
});
    

app.listen(port,()=>{
    console.log(`The server is listening at ${port}`);
})