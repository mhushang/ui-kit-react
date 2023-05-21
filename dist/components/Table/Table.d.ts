import { IColumn, ITableProps } from "./TableTypes";
export declare function Table<T extends IColumn>({ data, columns, hasSelected, scroll, loading, notFoundContent, rtl, className, leftSideSelectedNode, rightSideSelectedNode, onChange, type, }: ITableProps<T>): JSX.Element;
