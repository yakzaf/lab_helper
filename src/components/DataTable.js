import DataGrid, { TextEditor } from "react-data-grid";
import React, { useEffect, useState, useRef } from "react";
import _ from "lodash";

const DataTable = (attr) => {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const tableRef = useRef();

  let colsMd = attr.columns.slice(1, -1).split(" , ");
  let colsMdObj = colsMd.map((x) => JSON.parse(x));
  let rowsMd = attr.rows.slice(1, -1).split(" , ");
  let rowsMdObj = rowsMd.map((x) => JSON.parse(x));

  for (let i = 0; i < colsMdObj.length; i++) {
    colsMdObj[i].editable = true;
    colsMdObj[i].editor = TextEditor;
  }

  //set proper state for rows and cols ONCE per page load (cols don't change outside of the md file)
  if (!_.isEqual(cols, colsMdObj)) {
    setCols(colsMdObj);
    setRows(rowsMdObj);
  }
  return (
    <DataGrid
      ref={tableRef}
      className={attr.className}
      id={attr.id}
      rows={rows}
      onRowsChange={setRows}
      columns={cols}
    />
  );
};

export default DataTable;
