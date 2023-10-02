const express = require("express");
const router = express.Router();
const commonController=require("../controller/common");

//get all
router.get('/display',commonController.display);

//display book by id-addTocart and rent return id's of book only
router.get('/displayById',commonController.displayById);

//get by author
router.get('/displayByAuthor',commonController.displayBookByAuthor);

//get by category
router.get('/displayByCategory',commonController.displayBookByCategory);





module.exports=router;