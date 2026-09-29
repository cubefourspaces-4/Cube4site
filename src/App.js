import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Standardized relative imports
import Homepage from "./components/Homepage/Homepage";
import Nav from "./components/pages/Navigation";
import Footer from "./components/pages/Footer";
import Whatsapp from "./components/pages/whatsapp"; 
import Aboutus from "./components/pages/Aboutpage";
import Contact from "./components/pages/Contactpage";
import ScrollToTop from "./components/pages/ScrollToTop";
function App() {
  return (
    <Router>
     
        <Nav />
        <ScrollToTop />

        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Whatsapp />
        <Footer />
   
    </Router>
  );
}

export default App;