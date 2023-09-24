const User=require('../models/User');
const Book=require('../models/Book');

require("../dbConfig/database");

exports.signUp = async (req, res) => {
  try {
    console.log("signUp")
  } catch (err) {
    res.status(400).send({ type: "error", message: "Error occured " + err });
  }
};

exports.signIn = async (req, res) => {
  try {
    console.log("sign In")
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};