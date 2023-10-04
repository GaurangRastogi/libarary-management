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
router.get('/carted',verifyToken,userController.displayCarted);

//add to cart
router.post('/addToCart',verifyToken,userController.addToCart);


//-----------in add to cart---------------

//rent -> after one month remove from rent
router.post('/rentBook',verifyToken,userController.rentBook);

//remove from cart
router.post('/removeBook',verifyToken,userController.removeFromCart);



module.exports=router;