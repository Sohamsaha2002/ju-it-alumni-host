
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path as necessary
import Home from "./components/Home"; // Adjust the path as necessary
import Footer from "./components/Footer";
import Donate from "./components/Donate"; // Adjust the path as necessary
import Mission from "./components/Mission"; // Adjust the path as necessary
import Achievement from "./components/Achievement.jsx";
import Events from "./components/Events"; // Adjust the path as necessary
import Illumine22 from "./components/Illumine22.jsx";
import Alumni from "./components/Alumni"; // Adjust the path as necessary

//const Alumni = () => <div>Alumni Page</div>;
const Blogs = () => <div>Blogs Page</div>;
//const Events = () => <div>Events Page</div>;
const UG = () => <div>UG Alumni Page</div>;
const PG = () => <div>PG Alumni Page</div>;

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/events/illumine22" element={<Illumine22 />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  );
};

export default App;
