import DataGrid, { Column, TextEditor } from "react-data-grid";
import React, { FC } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addData } from "../redux/dataBinder";
import { DTAttr, TableState } from "../types";

// const updateTable = (tableValues: TableState) => {
//   const dispatch = useDispatch();
//   dispatch(addData(tableValues));
//   const tableId = Object.keys(tableValues)[0];
//   const tableState = useSelector(
//     (state: TableState) => state.dBReducer.tableData
//   );
//   return tableState[tableId].rows;
// };

const DataTable: FC<DTAttr> = (attr) => {
  const tableState = useSelector(
    (state: TableState) => state.dBReducer.tableData
  );
  const dispatch = useDispatch();
  // const [rows, setRows] = useState(Array);
  // const [cols, setCols] = useState<Column<unknown>[]>(Array);
  const tableId = attr.table_id;
  let colsMd = attr.columns.slice(1, -1).split(" , ");
  let colsMdObj = colsMd.map((x) => JSON.parse(x));
  let rowsMd = attr.rows.slice(1, -1).split(" , ");
  let rowsMdObj = rowsMd.map((x) => JSON.parse(x));

  let rows: object[] = rowsMdObj,
    cols: Column<object, unknown>[] = colsMdObj;

  if (typeof tableState[tableId] !== "undefined") {
    rows = tableState[tableId].rows;
    cols = tableState[tableId].cols;
  }

  const onRowsChange = (rowVals: object[]) => {
    const tableValues: TableState = {
      [tableId]: { rows: rowVals, cols: cols },
    };

    return dispatch(addData(tableValues));
  };

  for (let i = 0; i < colsMdObj.length; i++) {
    colsMdObj[i].editable = true;
    colsMdObj[i].editor = TextEditor;
  }

  //set proper state for rows and cols ONCE per page load (cols don't change outside of the md file)
  // if (!_.isEqual(cols, colsMdObj)) {
  //   // updateTable(tableValues);
  //   //@ts-ignore
  //   dispatch(addData(tableValues));
  //   // setCols(colsMdObj);
  //   // setRows(rowsMdObj);
  // }
  return (
    <div className="dataTable">
      <DataGrid
        className={`${attr.className} rdg-light`}
        rows={rows}
        onRowsChange={onRowsChange}
        columns={cols}
      />
      <p style={{ textAlign: "center" }}>{attr.caption}</p>
    </div>
  );
};

export default DataTable;
