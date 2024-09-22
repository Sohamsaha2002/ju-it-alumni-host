import React, { useEffect, useState } from 'react';

const Achievement = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetch('/components/achievement.json')
      .then((response) => response.json())
      .then((data) => setAchievements(data))
      .catch((error) => console.error('Error fetching achievements:', error));
  }, []);

  const renderCard = (achievement) => (
    <div key={achievement.name} className="bg-white p-4 rounded-lg shadow-lg m-4">
      <img
        src={
          achievement.ug_pg === 'ug'
            ? require(`../assets/achievementug/${achievement.photoFileName}`)
            : require(`../assets/achievementpg/${achievement.photoFileName}`)
        }
        alt={achievement.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{achievement.name}</h3>
        <p className="text-gray-700 mb-2">{achievement.description}</p>
        <p className="text-gray-500">{achievement.ug_pg.toUpperCase()}</p>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Achievements</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-bold mb-4">UG Achievements</h3>
            {achievements
              .filter((achievement) => achievement.ug_pg === 'ug')
              .map((achievement) => renderCard(achievement))}
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-bold mb-4">PG Achievements</h3>
            {achievements
              .filter((achievement) => achievement.ug_pg === 'pg')
              .map((achievement) => renderCard(achievement))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;