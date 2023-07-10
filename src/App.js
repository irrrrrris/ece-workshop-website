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
import Hardware2023 from "./components/Hardware2023";
import Hardware2022 from "./components/Hardware2022";
import PCB2022 from "./components/PCB2022";
import Microbotics from "./components/Microbotics";
import Software2022 from "./components/Software2022";
import Software2023 from "./components/Software2023";
import PythonML from "./components/PythonML";
import HamidContact from "./components/HamidContact";
import AboutUs from "./components/AboutUs";

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
              <Route path="/hardware-2022-page" element={<Hardware2022/>} />
              <Route path="/pcb-2022-page" element={<PCB2022/>} />
              <Route path="/hardware-2023-page" element={<Hardware2023/>} />
              <Route path="/microbotics-page" element={<Microbotics/>} />
              <Route path="/software-2022-page" element={<Software2022/>} />
              <Route path="/python-ML-page" element={<PythonML/>} />
              <Route path="/software-2023-page" element={<Software2023/>} />
              <Route path="/aboutus" element={<AboutUs/>} />
              <Route path="/hamid-contact-page" element={<HamidContact/>} />
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
