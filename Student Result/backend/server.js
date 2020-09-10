const express=require('express');
const bodyParser=require('body-parser');
const cors = require('cors'); 

//create express app
const app=express();

//parse requests of content-type-application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//parse requests of content-type-application/json
app.use(bodyParser.json());

//configuring the database
const dbConfig=require('./config/database.config.js');
const mongoose=require('mongoose');

mongoose.Promise=global.Promise;

//connect to database
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(()=>{
    console.log("Successfully connected to the database");
}).catch(err=>{
    console.log('could not connect to the database.Exitiing now');
    process.exit();
});
app.use(cors())

// cross.rigin.resource.sharing (CORS)
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
    next();
});
//following code to get data from db and display on console
var url='mongodb://localhost/students';
mongoose.connect(url,function(err,db){
    var cursor=db.collection('students').find();
    cursor.each(function(err,doc){
        console.log(doc);
    });
});

app.get('/',(req,res)=>{
    res.json({"message":"welcome to application"})
})

//define a simple route

require('./app/routes/students.route.js')(app);


//listen for requests
// app.listen(9000,()=>
app.listen(dbConfig.port,()=>
{
    console.log("Server is listening on port"+dbConfig.port);
});

