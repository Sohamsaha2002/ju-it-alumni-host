import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Mission from './components/Mission';
import Alumni from './components/Alumni';
import Events from './components/Events';
import Donate from './components/Donate';
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup';
import {jwtDecode} from 'jwt-decode';

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
    } catch (error) {
      console.error('Invalid token:', error);
      localStorage.removeItem('token');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <>
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events/*" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<LoginSignup onLogin={handleLogin} />} />
        <Route path="/register" element={<LoginSignup onLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
};

export default App;