// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import ControlPanel from './components/ControlPanel';
import AlgorithmSelector from './components/AlgorithmSelector';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';
import HeroText from './components/HeroText';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#123456]">
        <Navbar />
        <div className="container mx-auto px-4">
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex items-center justify-center min-h-screen bg-[#123456]">
                  <h1 className="text-white text-6xl font-bold relative">
                    Visualization
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent to-gray-900 mt-2"></span>
                  </h1>
                </div>
              }
            />
            <Route path="/HeroText" element={<HeroText />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
