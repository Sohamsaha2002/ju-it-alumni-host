import React from "react";
import smcc from "../assets/smcc.jpg"; // Adjust the path as necessary
import Nota from "./Nota";
import peopleData from "./peopleData";
import { useNavigate } from "react-router-dom";

export default function Body() {
  const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate("/mission");
  };
  const handleDiscoverMoreClick = () => {
    navigate('/achievement');
  };
  const handleViewEventsClick = () => {
    navigate('/events');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Image with Text Overlay */}
      <section className="relative mb-8">
        <img
          src={smcc}
          alt="Welcome to the JU IT Alumni"
          className="w-full h-100 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white px-4 md:px-8 py-2 md:py-4 rounded-lg shadow-2xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent transform translate-y-1/4 font-poppins">
            Welcome to the JU IT Alumni
          </h1>
        </div>
      </section>

      <section className="mb-8 p-4 md:p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-blue-800">Our Mission</h1>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          The mission of the Alumni Management Association of Jadavpur University Department of Information Technology is to foster a lifelong relationship between the university and its alumni. We aim to create a vibrant community of graduates who are engaged, informed, and inspired to contribute to the growth and development of the department and the university. Through various initiatives, events, and programs, we strive to support the professional and personal growth of our alumni, while also promoting the values of excellence, innovation, and collaboration that define our institution.
        </p>
        <button
          className="mt-4 md:mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-md font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          onClick={handleLearnMoreClick}
        >
          Learn More
        </button>
      </section>

      <section className="mb-8 p-4 md:p-8 bg-white rounded-lg shadow-lg w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-blue-800">Notable Alumnis</h2>
        <Nota people={peopleData} />
      </section>

      <section className="mb-8 p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-600">Achievement</h1>
        <p className="text-lg text-gray-700">
          Jadavpur University Department of Information Technology has produced numerous distinguished alumni who have made significant contributions in various fields. Some notable achievements include:
          <ul className="list-disc list-inside mt-2">
            <li>Dr. A 1, a renowned academician and researcher in robotics and automation.</li>
            <li>Dr. B 1, a leading expert in artificial intelligence and machine learning.</li>
            <li>Mr. C 1, a successful entrepreneur and founder of multiple tech startups.</li>
            <li>Ms. D 1, a prominent figure in the field of cybersecurity.</li>
          </ul>
        </p>
        <button
          className="mt-4 px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-colors duration-300"
          onClick={handleDiscoverMoreClick}
        >
          Discover More
        </button>
      </section>

      <section className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">Events</h1>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
          onClick={handleViewEventsClick}
        >
          View Events
        </button>
      </section>
    </div>
  );
}