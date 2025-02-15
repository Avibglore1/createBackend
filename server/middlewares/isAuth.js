import jwt from "jsonwebtoken";
import { User } from "../models/User.js";


export const isAuth = async (req, res, next) => {
    try {
      // 1. Get token from Authorization header
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
          message: "No token provided, Please Login",
        });
      }
  
      // 2. Extract token
      const token = authHeader.split(" ")[1];
      console.log("Token:", token);
  
      // 3. Verify the token using JWT
      const decodedData = jwt.verify(token, process.env.Jwt_Sec);
      console.log("Decoded Data:", decodedData);
  
      // 4. Attach user data to request
      req.user = await User.findById(decodedData._id).select("-password");
  
      if (!req.user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // 5. Proceed to next middleware
      next();
    } catch (error) {
      console.error("Auth Error:", error);
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired, please login again" });
      }
      if (error.name === "JsonWebTokenError") {
        return res.status(401).json({ message: "Invalid token" });
      }
  
      res.status(403).json({
        message: "Authentication failed",
      });
    }
  };
  
export const isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "admin")
            return res.status(403).json({
                message: "You are not admin",
            });

        next();
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};