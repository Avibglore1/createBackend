import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Logintoken") || null);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedToken = localStorage.getItem("Logintoken");
      setToken(storedToken);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const login = (newToken) => {
    if (newToken) {
      localStorage.setItem("Logintoken", newToken);
      setToken(newToken);
    }
  };

  const logout = () => {
    localStorage.removeItem("Logintoken");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
