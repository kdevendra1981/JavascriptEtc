const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))
let name = ['dev','parv','utsav','priya'];
// Our pug demo endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', { t: 'Hey Harry', myheading:"pug ji",msg: 'Hello there and thanks for telling me how to use pubG!', n:name })
});

app.get("/", (req, res) => {
    res.status(200).send("This is homepage of my first express app with Harry");
});

app.get("/about", (req, res) => {
    res.send("This is about page of my first express app with Harry");
});

app.post("/about", (req, res) => {
    res.send("This is a post request about page of my first express app with Harry");
});
app.get("/this", (req, res) => {
    res.status(404).send("This page is not found on my website cwh");
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});



// const express = require("express");
// const app = express();
// const path = require("path")
// const pug = require("pug")
// port = 80

// app.use("/static",express.static("static"));

// const compiledFunction = pug.compileFile("./views/demo.pug")

// app.get("/",(req,res)=>{
//     res.status(200).send("this is home page")
// });

// //sending values to pug file
// app.get("/demo",(req,res)=>{
//     console.log( compiledFunction({title:"Hello Pug Ji",myheading:"Pug Tutorial",msg: "Hey this is the pug tutorial"}));
// });
// app.get("/about",(req,res)=>{
//     res.status(200).send("this is about page")
// });

// app.listen(port,()=>{
//     console.log(`server listening at port:${port}`);
// })