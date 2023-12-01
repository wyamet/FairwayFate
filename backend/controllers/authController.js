// authController.js

const User = require("../models/userModel"); // Assuming you have a user model
const bcrypt = require("bcryptjs"); // For password hashing

exports.signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await User.create({
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }
    // Handle session/cookie or token generation here
    res.status(200).json({
      status: "success",
      data: {
        user: user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
