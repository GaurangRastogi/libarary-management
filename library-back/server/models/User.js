const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
    },
    //in cart not ordered yet
    cart:[String],
    rent:[String]
});


module.exports= mongoose.model("User",userSchema);