const { hashPassword, comparePassword } = require("../helpers/authhelper");
const userModel = require("../models/userModel");
const JWT = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, rollNo, Trainer, batchNo, answer } =
      req.body;
    console.log(name);
    // validation
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is required" });
    }
    if (!rollNo) {
      return res.send({ message: "Roll no is required" });
    }
    if (!Trainer) {
      return res.send({ message: "trainer is required" });
    }
    if (!batchNo) {
      return res.send({ message: "Batch no is required" });
    }
    if (!answer) {
      return res.send({ message: "Answer is required" });
    }
    // check user
    const existingUser = await userModel.findOne({ email, rollNo });
    // existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already register please Login",
      });
    }
    // Register user
    const hashedPassword = await hashPassword(password);

    // save
    // const user = await new userModel({name,email,phone,address,password:hashedPassword }).save();
    const user = await new userModel({
      name,
      email,
      phone,
      password: hashedPassword,
      rollNo,
      Trainer,
      batchNo,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: "User register successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: "false",
      message: "Error in registration",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { rollNo, password } = req.body;
    // validation
    if (!rollNo || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Roll No or Password",
      });
    }
    // check user
    const user = await userModel.findOne({ rollNo });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "rollNo not register",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.status(200).send({
      success: true,
      message: "Login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        rollNo: user.rollNo,
        Trainer: user.Trainer,
        batchNo: user.batchNo,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

module.exports = {
  registerController,
  loginController,
};
