import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail, { sendForgotMail } from "./../middlewares/sendMail.js";
import TryCatch from "../middlewares/TryCatch.js";

export const register = TryCatch(async (req, res) => {
  const { email, name, password } = req.body;

  let user = await User.findOne({ email });

  if (user)
    return res.status(400).json({
      message: "User already exists",
    });

  const hashPassword = await bcrypt.hash(password, 10);

  user = new User({
    name,
    email,
    password: hashPassword,
  });

  const otp = String(Math.floor(100000 + Math.random() * 900000)); // Ensures 6-digit OTP

  const activationToken = jwt.sign(
    { email, name, password: hashPassword, otp }, 
    process.env.Activation_Secret,
    { expiresIn: "10m" }
  );

  try {
    console.log("Sending OTP email...");
    await sendMail(email, "Amulya Jewels", { name, otp });
    console.log("OTP email sent.");
  } catch (error) {
    console.error("Failed to send OTP email:", error);
    return res.status(500).json({ message: "Failed to send OTP email" });
  }

  res.status(200).json({
    message: "OTP sent to your email address",
    activationToken,
  });
});

export const verifyUser = TryCatch(async (req, res) => {
  
  const { otp, activationToken } = req.body;

  if (!otp || !activationToken) {
    return res.status(400).json({ message: "OTP and activationToken required" });
  }

  let verify;
  try {
    verify = jwt.verify(activationToken, process.env.Activation_Secret);
  } catch (error) {
    return res.status(400).json({ message: "OTP expired or invalid token" });
  }

   if (verify.otp !== otp) {
    return res.status(400).json({ message: "Wrong OTP" });
  }

  // Ensure verify.user exists
  if (!verify.email || !verify.name) {
    return res.status(400).json({ message: "Invalid token data" });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email: verify.email });
  if (existingUser) {
    return res.status(400).json({ message: "User already registered" });
  }

  await User.create({
    name: verify.name,
    email: verify.email,
    password: verify.password, // Ensure password is hashed before storing
  });

  res.json({ message: "User Registered" });
});



export const loginUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(400).json({
      message: "No User with this email",
    });

  const mathPassword = await bcrypt.compare(password, user.password);

  if (!mathPassword)
    return res.status(400).json({
      message: "wrong Password",
    });

  const token = jwt.sign({ _id: user._id }, process.env.Jwt_Sec, {
    expiresIn: "15d",
  });

  res.json({
    message: `Welcome back ${user.name}`,
    token,
    user,
  });
});

export const myProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id);

  res.json({ user });
});

export const forgotPassword = TryCatch(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(404).json({
      message: "No User with this email",
    });

  const token = jwt.sign({ email }, process.env.Forgot_Secret);

  const data = { email, token };

  await sendForgotMail("E learning", data);

  user.resetPasswordExpire = Date.now() + 5 * 60 * 1000;

  await user.save();

  res.json({
    message: "Reset Password Link is send to you mail",
  });
});

export const resetPassword = TryCatch(async (req, res) => {
  const decodedData = jwt.verify(req.query.token, process.env.Forgot_Secret);

  const user = await User.findOne({ email: decodedData.email });

  if (!user)
    return res.status(404).json({
      message: "No user with this email",
    });

  if (user.resetPasswordExpire === null)
    return res.status(400).json({
      message: "Token Expired",
    });

  if (user.resetPasswordExpire < Date.now()) {
    return res.status(400).json({
      message: "Token Expired",
    });
  }

  const password = await bcrypt.hash(req.body.password, 10);

  user.password = password;

  user.resetPasswordExpire = null;

  await user.save();

  res.json({ message: "Password Reset" });
});

//  get all users
export const getAllusers = async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({
      message: "Unauthorized", // condition for checking user role
    });

  try {
    const data = await User.find();
    const userslist = data;
    res.status(200).send({
      message: "All users data",
      data: userslist,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      sucess: false,
      error: true,
    });
  }
};

// delete one users

export const deleteOneUser = async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({
      message: "Unauthorized", // condition for checking user role
    });

  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
        success: false,
        error: true,
      });
    }

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        error: true,
      });
    }

    res.json({
      message: "User deleted successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "An error occurred",
      success: false,
      error: true,
    });
  }
};



export const updateRole = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "This is admin route",
      });
    }

    const id = req.params.id;

    const user = await User.findOne({ _id: id });

    if (user.role === "admin") {
      user.role = "user";

      await sendMail(
        user.email,
        "Role Updated",
        "Your Role is Updated for the Amulya Jewels Project"
      );

      await user.save();

      return res.json({
        message: "user Role updated",
      });
    }

    if (user.role === "user") {
      user.role = "admin";

      await sendMail(
        user.email,
        "Role Updated",
        "Your Role is Updated for the Amulya Jewels Project"
      );

      await user.save();

      return res.json({
        message: "user Role updated",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
