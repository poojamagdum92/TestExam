const mongoose=require('mongoose');

const StudentSchema=mongoose.Schema({
    username:String,
    password:Number
  
    
},{
    timestamps:true
});
module.exports=mongoose.model('Student',StudentSchema);