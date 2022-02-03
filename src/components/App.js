import React from "react";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Simulator from "./Simulator";
import InstructionGenerator from "./InstructionGenerator";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/circuit-sim" element={<Simulator />} />
        <Route
          path="/generate-instruction"
          element={<InstructionGenerator />}
        />
      </Routes>
    </div>
  );
};

export default App;
