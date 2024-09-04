import React from 'react';
import Nalumcard from './Nalumcard';

const Nota = ({ people }) => {
  return (
	<div className="flex overflow-x-auto space-x-4 p-4">
	  {people.map((person, index) => (
		<Nalumcard key={index} name={person.name} imageFileName={person.imageFileName} />
	  ))}
	</div>
  );
};

export default Nota;