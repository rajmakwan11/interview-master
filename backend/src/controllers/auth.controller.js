const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../models/blacklist.model");

/**
 * @name registerUserController
 * @description Register a new user, expects username, email and password in the request body
 * @access public
 */

async function registerUserController(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Please provide username, email and password",
    });
  }

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "Account already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRETS,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User Registered Successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

/**
 * @name loginUserController
 * @description login a user, expects email and password in the request body
 * @access public
 */

async function loginUserController(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Invalid Email or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status(400).json({
      message: "Invalid email or Password",
    });
  }

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRETS,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);
  res.status(200).json({
    message: "User Logged in successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

/**
 * @name logoutUserController
 * @description clear token from user cookie and add the token in blacklist
 * @access public
 */

async function logoutUserController(req, res) {
  const token = req.cookies.token;

  // const istokenExistsInDB = await tokenBlacklistModel.findOne({token})

  // if(!istokenExistsInDB){
  await tokenBlacklistModel.create({ token });
  // }
  res.clearCookie("token");

  res.status(200).json({
    message: "User Logged out successfully",
  });

  
}

/**
 * @name getMeController
 * @description get the current logged in user details
 * @access private
 */

async function getMeController(req,res){

  const user = await userModel.findById(req.user.id)

  res.status(200).json({
    message:"User data fetched successfully",
    user:{
      id:user.id,
      username:user.username,
      email:user.email
    }
  })
  
}

module.exports = {
  registerUserController,
  loginUserController,
  logoutUserController,
  getMeController
};
  