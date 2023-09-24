const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    //in cart not ordered yet
    remaining:{
        type:Number,
        required:true,
        default:0
    }
});


module.exports= mongoose.model("Book",bookSchema);