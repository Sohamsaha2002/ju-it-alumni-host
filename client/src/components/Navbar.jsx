import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        {/* Logo */}
        <img
          src="https://i.pinimg.com/736x/ab/96/b1/ab96b1db5287493d2197645f563fbd6a.jpg"
          alt="Jadavpur University Logo"
          className="h-10 mr-4"
        />
        {/* Title */}
        <span className="text-white text-2xl font-semibold">
          JUIT Alumni Association
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
