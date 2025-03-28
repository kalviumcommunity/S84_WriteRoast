import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AddEntity from "./pages/AddEntity"; // Assuming this is your Add Entity page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-entity" element={<AddEntity />} />
      </Routes>
    </Router>
  );
};

export default App;
