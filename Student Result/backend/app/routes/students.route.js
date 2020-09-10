// module.exports=(app)=>{
//     const blogquote=require('../controllers/blogquote.controller.js');

//     //create a new note
//     app.post('/blogquote',blogquote.create);

//     //retrive all notes
//     app.get('/blogquote',blogquote.findAll);




// }


module.exports=(app)=>{
    const students=require('../controllers/student.controller.js');

    //create a new note
    app.post('/students',students.create);

    //retrive all notes
    app.get('/students',students.findAll);

   
}