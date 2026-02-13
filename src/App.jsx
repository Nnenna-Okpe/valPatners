import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vals12 from "./components/vals12.jsx";
import Vals14 from "./components/vals14.jsx";
import Home from "./components/home.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vals12" element={<Vals12 />} />
          <Route path="/vals14" element={<Vals14 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
