import React from 'react';
import { Link, Route, Routes, useMatch } from 'react-router-dom';
import Illumine22 from './Illumine22';
import Illumine20 from './Illumine20';
import Illumine18 from './Illumine18';

const Events = () => {
  const match = useMatch('/events/*');

  const events = [
    { year: '2022', component: Illumine22 },
    { year: '2020', component: Illumine20 },
    { year: '2018', component: Illumine18 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">ILLUMINE - Bi-Annual Alumni Reunion</h2>
        <p className="text-lg mb-6 text-center">
          ILLUMINE is our bi-annual alumni reunion event where we celebrate the achievements and memories of our alumni.
        </p>
        <div className="flex flex-wrap -mx-4">
          {events.map((event) => (
            <div key={event.year} className="w-full md:w-1/3 px-4 mb-4">
              <Link to={`${match.pathnameBase}/illumine${event.year}`} className="block bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-2">ILLUMINE {event.year}</h3>
                <p className="text-gray-700">Click to view photos and details of ILLUMINE {event.year}.</p>
              </Link>
            </div>
          ))}
        </div>
        <Routes>
          {events.map((event) => (
            <Route key={event.year} path={`illumine${event.year}`} element={<event.component />} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default Events;