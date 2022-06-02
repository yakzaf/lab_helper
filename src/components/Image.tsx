import React, { FC } from "react";
import { ImageAttr } from "../types";

const Image: FC<ImageAttr> = (attr) => {
  let centered = attr.centered?.toLowerCase() === "true";

  return (
    <div className={`${attr.className} ${centered ? "centered-img" : ""}`}>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>
              <img src={attr.filename} alt={attr.caption} />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: "center" }}>{attr.caption}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Image;
