import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendRegisterMail, { sendForgotMail } from "../utilities/sendMail.js";
import {TryCatch} from "./../utilities/TryCatch.js";

export const registerUser = TryCatch(async (req, res) => {
  const { email, name, password } = req.body;

  let user = await User.findOne({ email });

  if (user) return res.status(400).json({ message: "User already exists" });

  const hashPassword = await bcrypt.hash(password, 10);
  const otp = String(Math.floor(100000 + Math.random() * 900000));

  const activationToken = jwt.sign(
    { email, name, password: hashPassword, otp },
    process.env.Jwt_Sec,
    { expiresIn: "10m" }
  );

  try {
    await sendRegisterMail(email, "Amulya Jewels", { name, otp });
  } catch (error) {
    return res.status(500).json({ message: "Failed to send OTP email" });
  }

  res.status(200).json({ message: "OTP sent", activationToken });
});


export const verifyUser = TryCatch(async (req, res) => {
  const { otp, activationToken } = req.body;

  if (!otp || !activationToken) {
    return res.status(400).json({ message: "OTP and activation token are required." });
  }

  let decodedData;
  try {
    // ✅ Decode the activation token first
    decodedData = jwt.verify(activationToken, process.env.Jwt_Sec);
  } catch (error) {
    return res.status(400).json({ message: "Invalid or expired activation token." });
  }

  // ✅ Extract data from the decoded token
  const { email, name, password, otp: storedOtp } = decodedData;

  // ✅ Check if the OTP matches
  if (storedOtp !== otp) {
    return res.status(400).json({ message: "Wrong OTP. Please try again." });
  }

  // ✅ Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already registered. Please log in." });
  }

  // ✅ Save the new user to the database
  await User.create({
    name,
    email,
    password, // Ensure password is hashed before storing
  });

  res.json({ message: "User registered successfully!" });
});


export const loginUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });

  // Check if user exists and if password matches
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  // Create JWT token with user ID and role
  const token = jwt.sign(
    { _id: user._id, role: user.role },
    process.env.Jwt_Sec,
    { expiresIn: "15d" }
  );

  // Send response without sensitive data
  res.status(200).json({
    message: `Welcome back ${user.name}`,
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});


export const myProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password"); // Exclude password

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({
    message: "Profile fetched successfully",
    user,
  });
});


export const forgotPassword = TryCatch(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "No User with this email" });

  const token = jwt.sign({ email }, process.env.Forgot_Secret, { expiresIn: "5m" });

  await sendForgotMail(email, { email, token }); // Fixed incorrect parameter

  user.resetPasswordExpire = Date.now() + 5 * 60 * 1000;
  await user.save();

  res.json({ message: "Reset password link sent to your email" });
});


export const resetPassword = TryCatch(async (req, res) => {
  const decodedData = jwt.verify(req.query.token, process.env.Forgot_Secret);

  const user = await User.findOne({ email: decodedData.email });

  if (!user)
    return res.status(404).json({
      message: "No user with this email",
    });

  if (!user.resetPasswordExpire)
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


export const getAllusers = async (req, res) => {
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


export const deleteOneUser = async (req, res) => {
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
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.role = user.role === "admin" ? "user" : "admin"; // Toggle role

    await sendMail(user.email, "Role Updated", `Your role has been updated to ${user.role} in Amulya Jewels.`);

    await user.save();

    res.json({ message: "User role updated", newRole: user.role });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
