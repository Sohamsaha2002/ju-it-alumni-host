
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path as necessary
import Home from "./components/Home"; // Adjust the path as necessary
import Footer from "./components/Footer";
const Mission = () => <div>Ambition Page</div>;
const Alumni = () => <div>Alumni Page</div>;
const BlogsEvents = () => <div>Blogs and Events Page</div>;
const Payment = () => <div>Payment Page</div>;

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/blogs-events" element={<BlogsEvents />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
