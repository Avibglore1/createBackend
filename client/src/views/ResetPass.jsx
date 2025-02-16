import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams(); // Extract token from URL
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password: newPassword }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setTimeout(() => navigate("/login"), 2000); // Redirect after success
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-lg"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold">
            Reset Password
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
