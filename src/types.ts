export interface DTAttr {
  rows: string;
  columns: string;
  table_id: string;
  id?: string;
  className?: string;
}

export interface ChartAttr {
  className?: string;
  tableId?: string;
  plotTitle: string;
  type: string;
}

export interface TableState {
  [tableId: string]: any;
}
