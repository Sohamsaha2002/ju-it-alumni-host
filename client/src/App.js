
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path as necessary
import Body from "./components/Body"; // Adjust the path as necessary
import Footer from "./components/Footer";
const Home = () => <div>Home Page</div>;
const Ambition = () => <div>Ambition Page</div>;
const Alumni = () => <div>Alumni Page</div>;
const BlogsEvents = () => <div>Blogs and Events Page</div>;
const Payment = () => <div>Payment Page</div>;

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/ambition" element={<Ambition />} />
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
