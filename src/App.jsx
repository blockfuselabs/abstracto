import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/Hero';
import Navbar from './components/Navbar'; 
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
    <div className="App flex flex-col min-h-screen">
      {/* Header  */}
      <Navbar />

      {/* Main content area should expand to fill the space */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home/*" element={<HomePage />} />

         
          </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  </Router>
  );
}

export default App;
