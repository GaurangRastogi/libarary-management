const express = require("express");
const router = express.Router();
const adminController=require("../controller/admin");


//authentication
router.post('/signup',adminController.signUp);
router.post('/signin',adminController.signIn);

//crud
router.post('/create',adminController.create);
router.post('/update',adminController.update);
router.delete('/delete',adminController.delete);



module.exports=router;