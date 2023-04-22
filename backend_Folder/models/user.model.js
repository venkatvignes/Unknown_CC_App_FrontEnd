const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema= new Schema({
    username : {
        type: String,
        required: true,
        unique:false,
        trim:true,
        minlength:2,
    },
    Age : {
        type:Number,
        required: true,
        unique:false,
        trim:true,
        minlength:1,
    },
    emailId : {
        type:String,
        required: true,
        unique:true,
        trim:true,
        minlength:1,
    },
    mobileNo : {
        type:Number,
        required: true,
        unique:true,
        trim:true,
        minlength:2,
    }

    },{
     timestamps:true,
    
});

const user= mongoose.model('users', userSchema);

module.exports = user;