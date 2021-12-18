import React from "react";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Simulator from "./Simulator";

const App = () => {
  return (
    <div className="app" style={{ display: "flex" }}>
      <Navigation />
      <Routes>
        <Route path="/circuit-sim" element={<Simulator />} />
      </Routes>
    </div>
  );
};

export default App;
