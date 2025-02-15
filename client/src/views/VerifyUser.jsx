import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; 

const VerifyUser = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle OTP input change
  const handleChange = (e) => {
    setOtp(e.target.value);
    setError(null); // Reset error when user types
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    const activationToken = localStorage.getItem("activationToken");
    if (!activationToken) {
      setError("Activation token missing. Please register again.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp, activationToken }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("SignIn successfull 🎉");
        localStorage.removeItem("activationToken");
        navigate("/login"); // Redirect after successful verification
      } else {
        setError(data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 flex justify-center min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">Verify OTP</h2>

        {/* Error Message */}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* OTP Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Enter OTP
            </label>
            <input
              type="text"
              name="otp"
              placeholder="Enter the OTP sent to your email"
              value={otp}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md text-lg ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyUser;
