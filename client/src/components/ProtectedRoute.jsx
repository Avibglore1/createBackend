import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // ✅ Ensure correct state variable

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
