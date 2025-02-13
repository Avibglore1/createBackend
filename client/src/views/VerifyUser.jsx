import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyUser = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle OTP input change
  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const activationToken = localStorage.getItem("activationToken");
      const response = await fetch("http://localhost:5000/user/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp, activationToken }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("OTP verified successfully!");
        localStorage.removeItem("activationToken");
        navigate("/login"); // Redirect after successful verification
      } else {
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 flex justify-center min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">Verify OTP</h2>

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
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-lg"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyUser;
