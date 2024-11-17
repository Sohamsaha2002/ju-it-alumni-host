import React, { useState } from "react";
import Achievement from "./Achievement.jsx";

const UG = () => (
  <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full md:w-1/2">
    <h2 className="text-xl font-bold mb-2">Undergraduate Alumni</h2>
    <p>Details about UG alumni...</p>
  </div>
);

const PG = () => (
  <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full md:w-1/2">
    <h2 className="text-xl font-bold mb-2">Postgraduate Alumni</h2>
    <p>Details about PG alumni...</p>
  </div>
);

const Alumni = () => {
  const [showAchievements, setShowAchievements] = useState(false);
  const [showUG, setShowUG] = useState(false);
  const [showPG, setShowPG] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Alumni</h1>
      
      <div className="mb-8 text-center">
        <button
          onClick={() => setShowAchievements(!showAchievements)}
          className="text-white bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Notable Alumni
        </button>
        {showAchievements && <Achievement />}
      </div>

      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setShowUG(!showUG)}
          className="text-white bg-green-500 px-6 py-3 rounded-full hover:bg-green-600 transition duration-300"
        >
          UG
        </button>
        <button
          onClick={() => setShowPG(!showPG)}
          className="text-white bg-purple-500 px-6 py-3 rounded-full hover:bg-purple-600 transition duration-300"
        >
          PG
        </button>
      </div>

      <div className="flex flex-wrap justify-between">
        {showUG && <UG />}
        {showPG && <PG />}
      </div>
    </div>
  );
};

export default Alumni;