const Book=require('../models/Book');

require("../dbConfig/database");

exports.display=async (req,res)=>{
    try{
        const books=await Book.find({});

        res.status(200).send({
            type: "success",
            message: "All books fetched!",
            books:books
        });
    }
    catch(err){
        res.status(400).send({ message: "Error occured " + err });
    }
}