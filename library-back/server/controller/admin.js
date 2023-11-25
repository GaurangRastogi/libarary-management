const Admin=require('../models/Admin');
const Book=require('../models/Book');
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');


require("../dbConfig/database");

exports.signUp = async (req, res) => {
  try {
    
    const {email, password, mobile } = req.body;
    const emailRegex = /@gmail.com/;

    if (!emailRegex.test(email)) {
      throw "Please use the gmail account";
    }

    if (password.length < 6)
      throw "Password must be atleast 6 characters long.";

    //check if admin exists
    const adminExists = await Admin.findOne({ email: email });

    if (adminExists) throw "Admin with same credentials exists.";


    //hash password before saving
    const salt=await bcryptjs.genSalt(10);//salt with 10 rounds
    const hashedPassword=await bcryptjs.hash(password,salt);

    const admin = new Admin({
      email,
      password: hashedPassword,
      mobile,
    });

    await admin.save();

    res.status(200).send({
      type: "success",
      message: "Admin " + email + " registered successfully",
    });



  } catch (err) {
    res.status(400).send({ type: "error", message: "Error occured " + err });
  }
};

exports.signIn = async (req, res) => {
  try {
    const {email, password } = req.body;

    const admin = await Admin.findOne({ email: email });

    if(!admin)
      throw "Credentials doesn't match";
    
    const validPassword=await bcryptjs.compare(password,admin.password);
    
    if (!admin || !validPassword) throw "Credentials doesn't match";


    
    //Making web token using jwt, and so that creating session
    const token = jwt.sign({id:admin._id},process.env.JWT_SECRET,{ expiresIn: "3d" });

    res.json({
      message: "Admin logged in successfully",
      email:admin.email,
      token:token
    });
    
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};


exports.create=async(req,res)=>{

  try{
    
    const {name,category,author,imageUrl,description,numberOfBooks}=req.body;
    if(!name || !category || !author || !imageUrl || !description || !numberOfBooks){
      throw "Details are not entered properly!";
    }

    const alreadyPresent=await Book.findOne({name:name});

    if(alreadyPresent){
      throw "Book with this name already present";
    }

    const book=new Book({
      name,
      category,
      author,
      imageUrl,
      description,
      numberOfBooks
    })

    await book.save();


    res.status(200).send({
      type: "success",
      message: "New book is added successfully",
    });

  }
  catch(err){
    res.status(400).send({ message: "Error occured " + err });
  }
}


exports.update=async(req,res)=>{
  try{
    let {name,category,author,imageUrl,description,numberOfBooks}=req.body;
    
    if(!name){
      throw "Name should be given!";
    }
    
    const present=await Book.findOne({name:name});
    

    if(!present){
      throw "Book with this name is not present!";
    }

    //if null, restore default values
    category=(!category)?present.category:category;
    author=(!author)?present.author:author;
    imageUrl=(!imageUrl)?present.imageUrl:imageUrl;
    description=(!description)?present.description:description;
    numberOfBooks=(!numberOfBooks)?present.numberOfBooks:numberOfBooks;

    const newBook=await Book.findOneAndUpdate({name:name},{category,author,imageUrl,description,numberOfBooks});
    
    res.status(200).send({
      type: "success",
      message: "Book is updated successfully!",
    });

  }
  catch(err){
    res.status(400).send({ message: "Error occured " + err });
  }
}

exports.delete=async(req,res)=>{
  try{
    const {name}=req.body;
    const deleted=await Book.deleteOne({name:name});

    res.status(200).send({
      type: "success",
      message: `Book ${name} is deleted successfully!`,
    });

  }
  catch(err){
    res.status(400).send({ message: "Error occured " + err });
  }
}