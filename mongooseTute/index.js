const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/school', { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("We are connected now");
    
});

//    With Mongoose, everything is derived from a Schema. 
const StudentSchema = new mongoose.Schema({
    name: String,
    class: String,
    section: String,
    marks: Number

});
//   So far so good. We've got a schema with one property, name, which will be a String. The next step is compiling our schema into a Model.A model is a class with which we construct documents.
const student = mongoose.model('student', StudentSchema);
const newStudent = new student({ name: "yograj", class: "12th", section: "B", marks: 78 });

// //   let's take a look at how to add "speak" functionality to our documents:
// StudentSchema.methods.speak = function () {
//     console.log(this.name);
// }

newStudent.save(function (err, newStudent) {
    if (err) return console.error(err);
    // newStudent.speak;
})

student.find({name:"yograj"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(student);
  })

