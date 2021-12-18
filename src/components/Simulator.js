import "./Simulator.css";
import React from "react";

const Simulator = () => {
  return (
    <div className="circ-sim">
      <iframe
        title="falstad-sim"
        src="https://www.falstad.com/circuit/circuitjs.html"
      />
    </div>
  );
};

export default Simulator;
