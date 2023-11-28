const express = require("express");
const router = express.Router();
const userController=require("../controller/user");
const verifyToken=require("../middleware/auth").verifyToken


router.post('/signup',userController.signUp);
router.post('/signin',userController.signIn);
router.post('/signingoogle',userController.signInGoogle);


//user utilites routes

// rented
router.post('/rented',verifyToken,userController.displayRented);

//carted
router.post('/carted',verifyToken,userController.displayCarted);

//add to cart
router.post('/addToCart',verifyToken,userController.addToCart);

router.post('/bookInCartOrRent',verifyToken,userController.bookInCartOrRent);


//-----------in add to cart---------------

//rent -> after one month remove from rent
router.post('/rentBook',verifyToken,userController.rentBook);

//remove from cart
router.post('/removeBookFromCart',verifyToken,userController.removeFromCart);

//remove from rent
router.post('/removeBookFromRent',verifyToken,userController.removeFromRent);



module.exports=router; 