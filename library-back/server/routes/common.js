const express = require("express");
const router = express.Router();
const commonController=require("../controller/common");

router.get('/display',commonController.display);
module.exports=router;