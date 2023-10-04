const User = require("../models/User");
const Book = require("../models/Book");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../dbConfig/database");

exports.signUp = async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;
    const emailRegex = /@gmail.com/;

    if (!emailRegex.test(email)) {
      throw "Please use the gmail account";
    }

    if (password.length < 6)
      throw "Password must be atleast 6 characters long.";

    //check if user exists
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      if (userExists.password !== "google")
        throw "User with same credentials exists.";
      else {
        //hash password before saving
        const salt = await bcryptjs.genSalt(10); //salt with 10 rounds
        const hashedPassword = await bcryptjs.hash(password, salt);

        await User.findOneAndUpdate(
          { email: email },
          { password: hashedPassword, mobile: mobile }
        );

        res.status(200).send({
          type: "success",
          message: "User " + name + " registered successfully",
        });
      }
    } else {
      //hash password before saving
      const salt = await bcryptjs.genSalt(10); //salt with 10 rounds
      const hashedPassword = await bcryptjs.hash(password, salt);

      const user = new User({
        name,
        email,
        password: hashedPassword,
        mobile,
      });

      await user.save();

      res.status(200).send({
        type: "success",
        message: "User " + name + " registered successfully",
      });
    }
  } catch (err) {
    res.status(400).send({ type: "error", message: "Error occured " + err });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    //userCredential can be username or useremail

    const user = await User.findOne({ email: email });

    if (!user) throw "Credentials doesn't match";

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!user || !validPassword) throw "Credentials doesn't match";

    //Making web token using jwt, and so that creating session
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    res.json({
      message: "User logged in successfully",
      name: user.name,
      email: user.email,
      token: token,
    });
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};

exports.signInGoogle = async (req, res) => {
  try {
    const { name, email } = req.body;

    //check if user exists
    const user = await User.findOne({ email: email });

    console.log(user, name, email);

    if (user !== null) {
      //Making web token using jwt, and so that creating session
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "3d",
      });

      res.json({
        message: "User logged in successfully",
        name: user.name,
        email: user.email,
        token: token,
      });
    } else {
      const user = new User({
        name,
        email,
        password: "google",
      });

      const returnData = await user.save();

      // Making web token using jwt, and so that creating session
      const token = jwt.sign({ id: returnData._id }, process.env.JWT_SECRET, {
        expiresIn: "3d",
      });

      res.json({
        message: "User logged in successfully",
        name: user.name,
        email: user.email,
        token: token,
      });
    }
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};

exports.displayRented = async (req, res) => {
  try {
    const { name } = req.body;

    const rented = await User.findOne({ name: name }, "rent");

    res.json({
      type: "success",
      message: "Fetching rented books!",
      books: rented,
    });
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};

exports.displayCarted = async (req, res) => {
  try {
    const { name } = req.body;

    const rented = await User.findOne({ name: name }, "cart");

    res.json({
      type: "success",
      message: "Fetching carted books!",
      books: rented,
    });
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { name, bookId } = req.body;

    const _addToCart = await User.updateOne(
      { name: name },
      { $push: { cart: bookId } }
    );

    res.json({
      type: "success",
      message: "Added to cart!",
    });
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};

exports.rentBook = async (req, res) => {
  try {
    const { name, bookId } = req.body;

    const _rentBook = await User.updateOne(
      { name: name },
      { $push: { rent: bookId }, $pull: { cart: bookId } }
    );

    res.json({
      type: "success",
      message: "Book is rented!",
    });
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { name, bookId } = req.body;

    const removeFromCart = await User.updateOneOne(
      { name: name },
      { $pull: { cart: bookId } }
    );

    res.json({
      type: "success",
      message: "Book is removed from cart!",
    });
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};
