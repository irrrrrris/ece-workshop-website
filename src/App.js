import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Software from "./components/Software";
import Hardware from "./components/Hardware";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import hamidContact from "./components/hamidContact";

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/software-page" element={<Software/>} />
              <Route path="/hardware-page" element={<Hardware/>} />
              <Route path="/hardware-2022-page" element={<Hardware/>} />
              <Route path="/hardware-2023-page" element={<Hardware/>} />
              <Route path="/microbotics-page" element={<Hardware/>} />
              <Route path="/software-2022-page" element={<Hardware/>} />
              <Route path="/python-ML-page" element={<Hardware/>} />
              <Route path="/software-2023-page" element={<Hardware/>} />
              <Route path="/aboutus" element={<Hardware/>} />
              <Route path="/hamid-contact-page" element={<hamidContact/>} />
              <Route path="/*" element={<NotFound/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
