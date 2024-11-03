
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/Hero';
import Navbar from './components/Navbar'; 
import Footer from "./components/Footer"
import Documentation from './pages/Documentation';
import SocialWallet from "./components/SocialAuth/SocialWallet";
import OpenSource from "./pages/OpenSource";
import Features from "./pages/Features";

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
          <Route path="/features/*" element={<Features />} />
          <Route path="/documentation/*" element={<Documentation />} />
          <Route path="/open-source/*" element={<OpenSource />} />
          <Route path="/social-wallet/*" element={<SocialWallet />} />

          </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  </Router>
  );
}

export default App;
