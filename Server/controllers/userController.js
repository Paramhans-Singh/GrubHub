const express = require("express");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({ name, email, password });

  try {
    await newUser.save();
    res.send("User Registered Success");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };

      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "User login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};
