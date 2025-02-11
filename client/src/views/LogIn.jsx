import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';  // Add this import

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="pt-16 flex justify-center min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-md p-6 mt-10 bg-white rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="Logo" className="h-[105px]" />
        </div>

        {/* Login Text */}
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link to="/forgotPassword" className="text-sm text-gray-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Login
          </button>

          {/* Register Link */}
          <div className="text-center mt-4">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/signUp" className="text-black hover:underline font-medium">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;