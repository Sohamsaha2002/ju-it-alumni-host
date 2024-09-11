import React from "react";
import smcc from "../assets/smcc.jpg"; // Adjust the path as necessary
import Nota from "./Nota";
import peopleData from "./peopleData";
export default function Body() {
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
                <h1 className="text-6xl font-extrabold text-white px-8 py-4 rounded-lg shadow-2xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent transform translate-y-1/4 font-poppins">
                  Welcome to the JU IT Alumni
                </h1>
              </div>
            </section>
            <section className="mb-8 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h1 className="text-5xl font-extrabold mb-6 text-blue-800">Our Mission</h1>
              <p className="text-xl text-gray-800 leading-relaxed">
                The mission of the Alumni Management Association of Jadavpur University Department of Information Technology is to foster a lifelong relationship between the university and its alumni. We aim to create a vibrant community of graduates who are engaged, informed, and inspired to contribute to the growth and development of the department and the university. Through various initiatives, events, and programs, we strive to support the professional and personal growth of our alumni, while also promoting the values of excellence, innovation, and collaboration that define our institution.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </section>

            <section className="mb-8 p-8 bg-white rounded-lg shadow-lg w-full">
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Notable Alumnis</h2>
              <Nota people={peopleData} />
            </section>

            <section className="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h1 className="text-4xl font-bold mb-4 text-green-600">Achievement</h1>
                <p className="text-lg text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-300">
                    Discover More
                </button>
            </section>
            <section className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h1 className="text-4xl font-bold mb-4 text-red-600">Events</h1>
                <p className="text-lg text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300">
                    View Events
                </button>
            </section>
        </div>
    );
}