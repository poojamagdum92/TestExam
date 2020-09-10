// const Blogquote = require('../models/blogquote.model.js');

// Create and Save a new Note
// exports.create = (req,res) => {
// if(!req.body.quote) {
//     return res.status(400).send({
//         message: "quote content can not be empty"
//     });
// }


// Create a Note
// const blogquote=new Blogquote({
    // quote:req.body.quote,
    // quote:req.body.quote,
    // author:req.body.author,
    // category:req.body.category
// });

// Save Note in the database
// blogquote.save()
// .then(data => {
//     res.send(data);
// }).catch(err => {
//     res.status(500).send({
//         message: err.message || "Some error occurred while creating the Blogquote."
//     });
// });


// Retrieve and return all notes from the database.
// exports.findAll = (req, res) => {
//     Blogquote.find()
//     .then(blogquote => {
//         res.send(blogquote);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving blogquotes."
//         });
//     });

// };



//second attempt

const Student = require('../models/student.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
if(!req.body.username) {
    return res.status(400).send({
        message: "can not be empty"
    });
}

// Create a Note
const student = new Student({
    username: req.body.username, 
    password: req.body.password
});

// Save Note in the database
student.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message 
    });
});
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Student.find()
    .then(students => {
        res.send(students);
    }).catch(err => {
        res.status(500).send({
            message: err.message 
        });
    });



};




