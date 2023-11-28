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



exports.displayById=async(req,res)=>{
    try{
        const {bookId}=req.body;

        const book=await Book.findOne({_id:bookId});

        res.status(200).send({
            type: "success",
            message: "Book fetched!",
            book:book
        });
    }
    catch(err){
        res.status(400).send({ message: "Error occured " + err });
    }
}

exports.displayBookByName=async(req,res)=>{
    try{
        const {name}=req.body;

        const book=await Book.findOne({name:name});

        res.status(200).send({
            type: "success",
            message: `Book of name ${name} is fetched!`,
            book:book
        });
    }
    catch(err){
        res.status(400).send({ message: "Error occured " + err });
    }
}


exports.displayBookByAuthor=async(req,res)=>{
    try{
        const {author}=req.body;

        const books=await Book.find({author:author});

        res.status(200).send({
            type: "success",
            message: `Books of author ${author} fetched!`,
            books:books
        });
    }
    catch(err){
        res.status(400).send({ message: "Error occured " + err });
    }
}


exports.displayBookByCategory=async(req,res)=>{
    try{

        const {category}=req.body;

        const books=await Book.find({category:category});

        res.status(200).send({
            type: "success",
            message: `Books of category ${category} fetched!`,
            books:books
        });

    }
    catch(err){
        res.status(400).send({ message: "Error occured " + err });
    }
}