import DataGrid, { Column, DataGridHandle, TextEditor } from "react-data-grid";
import React, { useEffect, useState, useRef, FC } from "react";
import _ from "lodash";
import { DTAttr } from "../types";

const DataTable: FC<DTAttr> = (attr) => {
  // console.log(attr);
  const [rows, setRows] = useState(Array);
  const [cols, setCols] = useState<Column<unknown>[]>(Array);
  const tableRef = useRef<DataGridHandle | null>(null);

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
      rows={rows}
      onRowsChange={setRows}
      columns={cols}
    />
  );
};

export default DataTable;
