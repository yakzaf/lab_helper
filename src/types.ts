export interface Attr {
  className?: string;
  id?: string;
}

export interface DTAttr {
  rows: string;
  columns: string;
  table_id: string;
  id?: string;
  className?: string;
}

export interface ChartAttr {
  className?: string;
  table_id: string;
  x: string;
  y: string;
  chart_title: string;
  ytitle: string;
  types: string;
}

export interface TableState {
  [tableId: string]: any;
}
