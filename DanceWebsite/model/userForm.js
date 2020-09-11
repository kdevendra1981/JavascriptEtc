// init code
const mongoose = require("mongoose");

//create schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    phone:{
        type: Number
    },
    email:{
        type: String
    },
    message:{
        type: String
    }

});
const userForm = mongoose.model('userForm',userSchema);

module.exports= userForm;