import React, { useState, useEffect } from "react"; // ✅ Added useEffect Import
import { Eye, EyeOff } from "lucide-react";
import Logo from "../assets/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  useEffect(() => {
    if (location.pathname === "/login") {
      setEmail("");
      setPassword("");
    }
  }, [location.pathname]);

  const from = location.state?.from?.pathname || "/";

  // ✅ Handle Login Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        login(data.token); // ✅ Store Token via Context
        setEmail("");
        setPassword("");
        // alert("Login successful!");
        navigate(from, { replace: true });
      } else {
        alert(data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 flex justify-center min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="w-full max-w-md p-6 mt-10 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="Logo" className="h-[105px]" />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {/* ✅ Login Form */}
        <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
           {/* Trick Autofill */}
           <input
            type="text"
            name="hidden-username"
            autoComplete="username"
            className="hidden"
          />
          <input
            type="password"
            name="hidden-password"
            autoComplete="new-password"
            className="hidden"
          />
          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              name="random-email"
              inputMode="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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

          {/* Forgot Password */}
          <div className="text-right">
            <Link to="/forgotPassword" className="text-sm text-gray-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 
              ${loading ? "bg-gray-500" : "bg-black hover:bg-gray-800"} text-white`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Register */}
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
