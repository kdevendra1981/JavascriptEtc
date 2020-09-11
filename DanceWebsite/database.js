const mongoose = require('mongoose');
const assert = require('assert');
const db_url = process.env.DB_URL;

//connection code
mongoose.connect(db_url,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true},(err,link)=>{
    //check error
    assert.equal(err,null, 'Database connection error')
    console.log(link);
})