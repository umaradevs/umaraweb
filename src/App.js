import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./index.css";
import Home from "./Pages/Home";
import Ubud from "./Pages/Ubud";
import Uluwatu from "./Pages/Uluwatu";
import Umara from "./Pages/Umara";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ubud" element={<Ubud />} />
          <Route path="/uluwatu" element={<Uluwatu />} />
          <Route path="/kerobokan" element={<Umara />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
