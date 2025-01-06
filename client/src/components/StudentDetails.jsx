import React, { useEffect, useState } from 'react';

const StudentDetails = ({ batch }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`/assets/student_details/${batch}.json`)
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching student details:', error));
  }, [batch]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Student Details for {batch}</h2>
      <ul className="list-disc list-inside">
        {students.map((student, index) => (
          <li key={index} className="text-gray-700">
            {student.name} - {student.rollNo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDetails;