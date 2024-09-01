import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/ju_logo.png"; // Adjust the path as necessary

const Navbar = () => {
  const location = useLocation();
  
  const linkClasses = (path) => {
    return location.pathname === path
      ? "text-yellow-300 text-lg font-medium transition duration-300"
      : "text-white text-lg font-medium hover:text-yellow-300 transition duration-300";
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-800 p-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Jadavpur University Logo"
          className="h-10 mr-4 rounded-full"
        />
        <span className="text-white text-2xl font-bold">
          JU IT Alumni Association
        </span>
      </div>
      <div className="flex space-x-6">
        {/* Navigation Links */}
        <Link to="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link to="/ambition" className={linkClasses("/ambition")}>
          Ambition
        </Link>
        <Link to="/alumni" className={linkClasses("/alumni")}>
          Alumni
        </Link>
        <Link to="/blogs-events" className={linkClasses("/blogs-events")}>
          Blogs and Events
        </Link>
        <Link to="/payment" className={linkClasses("/payment")}>
          Payment
        </Link>
        {/* Login/Signup Button */}
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
          Login / Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;