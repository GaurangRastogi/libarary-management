const Admin=require('../models/Admin');
const Book=require('../models/Book');
const bcryptjs=require('bcryptjs');


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
    console.log(email,password);

    const admin = await Admin.findOne({ email: email });

    if(!admin)
      throw "Credentials doesn't match";
    
    const validPassword=await bcryptjs.compare(password,admin.password);
    
    if (!admin || !validPassword) throw "Credentials doesn't match";

    res.json({
      message: "Admin logged in successfully",
      email:admin.email
    });
    
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};


exports.create=async(req,res)=>{

  try{
    
  }
  catch(err){
    res.status(400).send({ message: "Error occured " + err });
  }
}