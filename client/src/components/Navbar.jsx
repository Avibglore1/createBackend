import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Import Auth Context
import { Menu, X } from "lucide-react";
import logo from "./../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // ✅ Popup state
  const { isAuthenticated, logout } = useAuth(); // ✅ Use correct state
  const navigate = useNavigate();

  // ✅ Logout Function (Now Updates State Properly)
  const handleLogout = () => {
    logout(); // ✅ Clears token & updates state
    navigate("/login");
  };

  // ✅ Handle Navigation & Popup
  const handleLinkClick = (path) => {
    if (path === "/" && !isAuthenticated) {
      setShowPopup(true); // ✅ Show popup if user is not authenticated
      return;
    }
    setIsOpen(false);
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <nav className="bg-[#011728] text-white shadow-md fixed w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* 🔷 Logo */}
          <Link to="/" onClick={() => handleLinkClick("/")}>
            <img className="h-16" src={logo} alt="Logo" />
          </Link>

          {/* 🔷 Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-semibold">
            <button className="text-gray-400 hover:text-gray-200" onClick={() => handleLinkClick("/")}>Home</button>
            <Link to="/about" onClick={() => handleLinkClick("/about")} className="text-gray-400 hover:text-gray-200">About</Link>
            <Link to="/collection" onClick={() => handleLinkClick("/collection")} className="text-gray-400 hover:text-gray-200">Collections</Link>
            <Link to="/shop" onClick={() => handleLinkClick("/shop")} className="text-gray-400 hover:text-gray-200">Shop</Link>
            <Link to="/blog" onClick={() => handleLinkClick("/blog")} className="text-gray-400 hover:text-gray-200">Blog</Link>
            <Link to="/help" onClick={() => handleLinkClick("/help")} className="text-gray-400 hover:text-gray-200">Help</Link>
            <Link to="/cart" onClick={() => handleLinkClick("/cart")} className="text-gray-400 hover:text-gray-200">Cart</Link>

            {/* ✅ Show Login or Logout Based on Auth Context */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="py-1 px-8 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="py-1 px-8 bg-white text-black rounded-full hover:bg-gray-300 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* 🔷 Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 🔷 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 text-lg font-semibold px-6 fixed top-0 left-0 w-full h-full z-50">
          <button onClick={() => handleLinkClick("/")} className="block py-2 text-gray-600 hover:text-gray-900">Home</button>
          <Link to="/about" onClick={() => handleLinkClick("/about")} className="block py-2 text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/collection" onClick={() => handleLinkClick("/collection")} className="block py-2 text-gray-600 hover:text-gray-900">Collections</Link>
          <Link to="/shop" onClick={() => handleLinkClick("/shop")} className="block py-2 text-gray-600 hover:text-gray-900">Shop</Link>
          <Link to="/blog" onClick={() => handleLinkClick("/blog")} className="block py-2 text-gray-600 hover:text-gray-900">Blog</Link>
          <Link to="/help" onClick={() => handleLinkClick("/help")} className="block py-2 text-gray-600 hover:text-gray-900">Help</Link>
          <Link to="/cart" onClick={() => handleLinkClick("/cart")} className="block py-2 text-gray-600 hover:text-gray-900">Cart</Link>

          {/* ✅ Login/Logout Button (Mobile) */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="w-full py-2 text-center bg-red-600 text-white rounded-md mt-4 hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block w-full py-2 text-center bg-black text-white rounded-md mt-4 hover:bg-gray-800"
            >
              Login
            </Link>
          )}
        </div>
      )}

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold mb-4 text-red-600">
              You need to log in to access Home.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2 hover:bg-gray-600"
            >
              Close
            </button>
            <button
              onClick={() => {
                setShowPopup(false); // Close the popup first
                navigate("/login");  // Then navigate to login
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
