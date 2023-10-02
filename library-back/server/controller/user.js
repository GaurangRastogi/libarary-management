const User=require('../models/User');
const Book=require('../models/Book');
const bcryptjs=require('bcryptjs');


require("../dbConfig/database");

exports.signUp = async (req, res) => {
  try {
    
    const { name, email, password, mobile } = req.body;
    const emailRegex = /@gmail.com/;

    if (!emailRegex.test(email)) {
      throw "Please use the gmail account";
    }

    if (password.length < 6)
      throw "Password must be atleast 6 characters long.";

    //check if user exists
    const userExists = await User.findOne({
      $or: [{ name: name }, { email: email }],
    });

    if (userExists) throw "User with same credentials exists.";


    //hash password before saving
    const salt=await bcryptjs.genSalt(10);//salt with 10 rounds
    const hashedPassword=await bcryptjs.hash(password,salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      mobile,
    });

    await user.save();

    res.status(200).send({
      type: "success",
      message: "User " + name + " registered successfully",
    });



  } catch (err) {
    res.status(400).send({ type: "error", message: "Error occured " + err });
  }
};

exports.signIn = async (req, res) => {
  try {
    const {email, password } = req.body;
    //userCredential can be username or useremail


    const user = await User.findOne({ email: email });

    if(!user)
      throw "Credentials doesn't match";
    
    const validPassword=await bcryptjs.compare(password,user.password);
    
    console.log(user,validPassword);

    if (!user || !validPassword) throw "Credentials doesn't match";

    res.json({
      message: "User logged in successfully",
      name: user.name,
      email:user.email
    });
    
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};



exports.displayRented=async(req,res)=>{
  try{
    const {name}=req.body;

    const rented=await User.findOne({name:name},'rent');

    res.json({
      type: "success",
      message: "Fetching rented books!",
      books:rented
    });

  }
  catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
}

exports.displayCarted=async(req,res)=>{
  try{
    const {name}=req.body;

    const rented=await User.findOne({name:name},'cart');

    res.json({
      type: "success",
      message: "Fetching carted books!",
      books:rented
    });

  }
  catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
}

exports.addToCart=async(req,res)=>{
  try{
    const {name,bookId}=req.body;

    const _addToCart=await User.updateOne({ name:name}, { $push: { cart: bookId } });


    res.json({
      type: "success",
      message: "Added to cart!",
    });
  }
  catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
}


exports.rentBook=async(req,res)=>{
  try{

    const {name,bookId}=req.body;

    const _rentBook=await User.updateOne({name:name},{$push:{rent:bookId},$pull:{cart:bookId}});


    res.json({
      type: "success",
      message: "Book is rented!",
    });

  }
  catch(err){
    res.status(400).send({message:"Error occured "+err});
  }
}


exports.removeFromCart=async(req,res)=>{
  try{
    const {name,bookId}=req.body;

    const removeFromCart=await User.updateOneOne({name:name},{$pull:{cart:bookId}});

    res.json({
      type: "success",
      message: "Book is removed from cart!",
    });
  }
  catch(err){
    res.status(400).send({message:"Error occured "+err});
  }
}