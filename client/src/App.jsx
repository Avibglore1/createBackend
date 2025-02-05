import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import AboutUs from "./components/AboutUs/AboutHero";
import Collection from "./components/Collection/Collection"


function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/collection" element={<Collection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
