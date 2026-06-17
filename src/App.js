import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Nav from "./components/pages/Navigation";
import Footer from "./components/pages/Footer";
import Whatsapp from "./components/pages/whatsapp";
import SmoothScrollProvider from "../src/components/pages/SmoothScrollProvider";

function App() {
  return (
    <Router>
      <SmoothScrollProvider>
        <Nav />

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>

        <Whatsapp />
        <Footer />
      </SmoothScrollProvider>
    </Router>
  );
}

export default App;