import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] bg-gray-100">
  <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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

export default ForgotPassword;
