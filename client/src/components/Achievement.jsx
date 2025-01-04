import React, { useEffect, useState } from 'react';

const Achievement = () => {
  const [ugAchievements, setUgAchievements] = useState([]);
  const [pgAchievements, setPgAchievements] = useState([]);

  useEffect(() => {
    fetch('/assets/achievement.json')
      .then((response) => response.json())
      .then((data) => {
        const ug = data.filter(achievement => achievement.ug_pg === 'ug');
        const pg = data.filter(achievement => achievement.ug_pg === 'pg');
        setUgAchievements(ug);
        setPgAchievements(pg);
      })
      .catch((error) => console.error('Error fetching achievements:', error));
  }, []);

  const renderCard = (achievement) => {
    const imagePath = achievement.ug_pg === 'ug'
      ? `/assets/achievementug/${achievement.photoFileName}`
      : `/assets/achievementpg/${achievement.photoFileName}`;

    return (
      <div key={achievement.name} className="bg-white p-2 rounded-lg shadow-lg m-2 w-full md:w-1/2 lg:w-1/3">
        <img
          src={imagePath}
          alt={achievement.name}
          className="w-full h-auto object-contain rounded-t-lg"
        />
        <div className="p-2">
          <h3 className="text-lg font-bold mb-1">{achievement.name}</h3>
          <p className="text-gray-700 mb-1">{achievement.description}</p>
          <p className="text-gray-500">{achievement.ug_pg.toUpperCase()}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Achievements</h2>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2">
            <h3 className="text-2xl font-bold mb-4 text-center">UG Alumni Achievements</h3>
            <div className="flex flex-wrap">
              {ugAchievements.map(renderCard)}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <h3 className="text-2xl font-bold mb-4 text-center">PG Alumni Achievements</h3>
            <div className="flex flex-wrap">
              {pgAchievements.map(renderCard)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;