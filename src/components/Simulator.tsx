import "./Simulator.css";
import React, { FC } from "react";

const Simulator: FC<any> = (attr) => {
  return (
    <div className="csim-md" {...attr.id}>
      <iframe
        title="falstad-sim"
        src="https://www.falstad.com/circuit/circuitjs.html"
      />
    </div>
  );
};

export default Simulator;
