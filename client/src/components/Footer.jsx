import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "./../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-[#011728] text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className=" font-bold">
                <img className="h-32" src={logo} alt="Logo" />
            </h2>
            <p className="mt-2 text-gray-400">Your trusted partner for quality products and services.</p>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-gray-200">About</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-gray-200">Shop</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-gray-200">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gray-200">Contact</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold">Support</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-gray-200">Help Center</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-gray-200">FAQs</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-gray-200">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-gray-200">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-gray-400 hover:text-gray-200"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-200"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-200"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-200"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Amulya Jewels. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
