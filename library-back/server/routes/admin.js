const express = require("express");
const router = express.Router();
const userController=require("../controller/admin");


//authentication
router.post('/signup',userController.signUp);
router.post('/signin',userController.signIn);

//crud
router.post('/create',userController.create);
router.post('/update',userController.update);
router.delete('/delete',userController.delete);



module.exports=router;