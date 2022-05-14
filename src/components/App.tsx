import React, { FC } from "react";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Simulator from "./Simulator";
import InstructionGenerator from "./InstructionGenerator";

const App: FC = () => {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<InstructionGenerator filename="guide" />} />
        <Route path="/circuit-sim" element={<Simulator />} />
        <Route
          path="/generate-instruction"
          element={<InstructionGenerator filename="index" />}
        />
      </Routes>
    </div>
  );
};

export default App;
