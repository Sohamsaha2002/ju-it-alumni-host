import React, { useState } from 'react';
import Illumine22 from './Illumine22';
import Illumine20 from './Illumine20';
import Illumine18 from './Illumine18';
// Add more imports for other years as needed

const events = [
  { year: '2022', component: Illumine22 },
  /*{ year: '2020', component: Illumine20 },*/
  { year: '2018', component: Illumine18 },
  // Add more components for other years as needed
];

// Generate events for years from 2004 to 2016 biannually
for (let year = 2004; year < 2018; year += 2) {
  if(year==2020)
    continue;
  events.push({ year: year.toString(), component: () => <div>ILLUMINE {year}</div> });
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto flex">
        <div className="w-full md:w-1/3 pr-4">
          <h2 className="text-3xl font-bold mb-6 text-center">ILLUMINE - Bi-Annual Alumni Reunion</h2>
          <p className="text-lg mb-6 text-center">
            ILLUMINE is our bi-annual alumni reunion event where we celebrate the achievements and memories of our alumni.
          </p>
          <div className="flex flex-col space-y-4">
            {events.map((event) => (
              <div
                key={event.year}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <h3 className="text-xl font-bold mb-2">ILLUMINE {event.year}</h3>
                <p className="text-gray-700">Click to view photos and details of ILLUMINE {event.year}.</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/3 pl-4">
          {selectedEvent ? (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">ILLUMINE {selectedEvent.year}</h3>
              <selectedEvent.component />
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Select an event to view details</h3>
              <p className="text-gray-700">Click on an event from the list on the left to view photos and details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;