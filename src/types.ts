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
  caption?: string;
}

export interface ChartAttr {
  className?: string;
  table_id: string;
  x: string;
  y: string;
  chart_title: string;
  ytitle: string;
  types: string;
  caption?: string;
}

export interface MIAttr {
  className?: string;
  id: string;
}

export interface MOAttr {
  className?: string;
  id?: string;
  target_ids: string;
  exp: string;
}

export interface ImageAttr {
  className?: string;
  id?: string;
  filename: string;
  caption?: string;
  centered?: string;
}

export interface TableState {
  [tableId: string]: any;
}

export interface MIState {
  [fieldId: string]: any;
}
