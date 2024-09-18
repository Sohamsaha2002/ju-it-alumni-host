import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/ju_logo.png"; // Adjust the path as necessary

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const linkClasses = (path) => {
    return location.pathname === path
      ? "text-yellow-300 text-lg font-medium transition duration-300"
      : "text-white text-lg font-medium hover:text-yellow-300 transition duration-300";
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownItemClick = (path) => {
    setDropdownOpen(false);
    navigate(path);
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
      <div className="hidden md:flex space-x-6">
        {/* Navigation Links */}
        <Link to="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link to="/mission" className={linkClasses("/mission")}>
          Mission
        </Link>
        <div className="relative group">
          <button
            onClick={handleDropdownToggle}
            className={`${linkClasses("/alumni")} flex items-center`}
          >
            Alumni
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2">
            <button
              onClick={() => handleDropdownItemClick('/alumni/ug')}
              className="block px-6 py-3 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-md shadow-md transition duration-300"
            >
              UG
            </button>
            <button
              onClick={() => handleDropdownItemClick('/alumni/pg')}
              className="block px-6 py-3 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-md shadow-md transition duration-300"
            >
              PG
            </button>
          </div>
        </div>
        <Link to="/blogs" className={linkClasses("/blogs")}>
          Blogs
        </Link>
        <Link to="/events" className={linkClasses("/events")}>
          Events
        </Link>
        <Link to="/donate" className={linkClasses("/donate")}>
          Donate
        </Link>
        {/* Login/Signup Button */}
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
          Login / Signup
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-800 to-purple-800 shadow-lg z-50">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" className={linkClasses("/")}>
              Home
            </Link>
            <Link to="/mission" className={linkClasses("/mission")}>
              Mission
            </Link>
            <div className="relative group">
              <button
                onClick={handleDropdownToggle}
                className={`${linkClasses("/alumni")} flex items-center`}
              >
                Alumni
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2">
                <button
                  onClick={() => handleDropdownItemClick('/alumni/ug')}
                  className="block px-6 py-3 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-md shadow-md transition duration-300"
                >
                  UG
                </button>
                <button
                  onClick={() => handleDropdownItemClick('/alumni/pg')}
                  className="block px-6 py-3 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-md shadow-md transition duration-300"
                >
                  PG
                </button>
              </div>
            </div>
            <Link to="/blogs" className={linkClasses("/blogs")}>
              Blogs
            </Link>
            <Link to="/events" className={linkClasses("/events")}>
              Events
            </Link>
            <Link to="/donate" className={linkClasses("/donate")}>
              Donate
            </Link>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
              Login / Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;