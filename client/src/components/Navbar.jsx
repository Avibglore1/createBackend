import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-[#011728] text-white shadow-md fixed w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick}>
            <img className="h-16" src={logo} alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-semibold">
            <Link to="/" onClick={handleLinkClick} className="text-gray-400 hover:text-gray-200">Home</Link>
            <Link to="/about" onClick={handleLinkClick} className="text-gray-400 hover:text-gray-200">About</Link>
            <Link to="/collection" onClick={handleLinkClick} className="text-gray-400 hover:text-gray-200">Collections</Link>
            <Link to="/shop" onClick={handleLinkClick} className="text-gray-400 hover:text-gray-200">Shop</Link>
            <Link to="/blog" onClick={handleLinkClick} className="text-gray-400 hover:text-gray-200">Blog</Link>
            <Link to="/help" onClick={handleLinkClick} className="text-gray-400 hover:text-gray-200">Help</Link>
            <Link to="/cart" onClick={handleLinkClick} className="text-gray-400 hover:text-gray-200">Cart</Link>
            <Link
              to="/login"
              onClick={handleLinkClick}
              className="py-1 px-8 bg-white text-black rounded-full hover:bg-gray-300 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-2 text-lg font-semibold px-4 fixed top-0 left-0 w-full h-full z-50">
          <Link to="/" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/collection" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-gray-900">Collections</Link>
          <Link to="/shop" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-gray-900">Shop</Link>
          <Link to="/blog" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-gray-900">Blog</Link>
          <Link to="/help" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-gray-900">Help</Link>
          <Link to="/cart" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-gray-900">Cart</Link>
          <Link to="/account" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-gray-900">Account</Link>
        </div>
      )}
    </nav>
  );
}
