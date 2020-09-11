//init code
require('dotenv').config();
const express = require("express");
// const path = require("path");
const bodyParser = require("body-parser")
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const database = require('./database');
const { check, validationResult } = require("express-validator");
const userform = require("./model/userForm");
port = process.env.PORT;


app.use(express.static('./static'));
// app.use(express.static('./static/images'));

//middleware setup

app.set("view engine",'pug');
app.set('views','./views');
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use('/form_submit',userController)


app.get("/",(req,res)=>{
    console.log(`app.get : ${req.url}`);
    res.status(200).render("home.pug")
});

app.get("/contact",(req,res)=>{
    console.log(`app.get/contact : ${req.url}`);
    res.status(200).render("contact.pug")
});
//routs starts from here
app.post('/form_submit',
    [
        check('name').not().isEmpty().trim().escape(),
        check('age').isNumeric(),
        check('email').isEmail().normalizeEmail(),
        check('phone').isNumeric().escape(),
    ],
    (req, res) => {

        console.log(`form_sumit : ${req.url}`);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422), json({
                status: "Failed",
                message: "Input data error.",
                errors: errors.array()
            })
        } else {

            //create new user model
            var temp = new userform({
                name: req.body.name,
                age: req.body.age,
                phone: req.body.phone,
                email: req.body.email,
                message: req.body.message
            });

            //saving data into database
            temp.save((error, result) => {
                if (error) {
                    return res.json({
                        status: false,
                        message: "Insert in data Failed",
                        error: error
                    });
                }
                //if everything is ok
                return res.json({
                    status: true,
                    message: "Data Inserted",
                    resutl: result
                })
            })
        
        }
    })


app.listen(port,()=>{
    console.log(`The server is listening at ${port}`);
})