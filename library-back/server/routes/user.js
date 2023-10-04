const express = require("express");
const router = express.Router();
const userController=require("../controller/user");
const verifyToken=require("../middleware/auth").verifyToken


router.post('/signup',userController.signUp);
router.post('/signin',userController.signIn);
router.post('/signingoogle',userController.signInGoogle);


//user utilites routes

// rented
router.get('/rented',verifyToken,userController.displayRented);

//carted
router.get('/carted',userController.displayCarted);

//add to cart
router.post('/addToCart',userController.addToCart);


//-----------in add to cart---------------

//rent -> after one month remove from rent
router.post('/rentBook',userController.rentBook);

//remove from cart
router.post('/removeBook',userController.removeFromCart);



module.exports=router;