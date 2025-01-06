import React, { useState } from "react";
import Achievement from "./Achievement.jsx";
import UGBatches from "./UGBatches.jsx";
import PGBatches from "./PGBatches.jsx";
import StudentDetails from "./StudentDetails.jsx";

const Alumni = () => {
  const [showAchievements, setShowAchievements] = useState(false);
  const [showUG, setShowUG] = useState(false);
  const [showPG, setShowPG] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(null);

  const handleBatchSelect = (batch) => {
    setSelectedBatch(batch);
  };

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
          onClick={() => { setShowUG(!showUG); setShowPG(false); }}
          className="text-white bg-green-500 px-6 py-3 rounded-full hover:bg-green-600 transition duration-300"
        >
          UG
        </button>
        <button
          onClick={() => { setShowPG(!showPG); setShowUG(false); }}
          className="text-white bg-purple-500 px-6 py-3 rounded-full hover:bg-purple-600 transition duration-300"
        >
          PG
        </button>
      </div>

      <div className="flex">
        <div className="w-1/3 pr-4">
          {showUG && <UGBatches onSelectBatch={handleBatchSelect} />}
          {showPG && <PGBatches onSelectBatch={handleBatchSelect} />}
        </div>
        <div className="w-2/3 pl-4">
          {selectedBatch && <StudentDetails batch={selectedBatch} />}
        </div>
      </div>
    </div>
  );
};

export default Alumni;