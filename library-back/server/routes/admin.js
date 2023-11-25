const express = require("express");
const router = express.Router();
const adminController=require("../controller/admin");
const verifyToken=require("../middleware/auth").verifyToken


//authentication
router.post('/signup',adminController.signUp);
router.post('/signin',adminController.signIn);

//crud
router.post('/create',verifyToken,adminController.create);
router.post('/update',verifyToken,adminController.update);
router.delete('/delete',verifyToken,adminController.delete);



module.exports=router;