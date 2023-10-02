const express = require("express");
const router = express.Router();
const userController=require("../controller/user");



router.post('/signup',userController.signUp);
router.post('/signin',userController.signIn);


//user utilites routes

// rented 



//carted



//add to cart



//-----------in add to cart---------------

//rent -> after one month remove from rent


//remove from cart




module.exports=router;