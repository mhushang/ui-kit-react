import React from "react";
import { COLUMN_ALIGN_TYPE, SORTER_TYPE, TABLE_TYPE } from "./TableConstants";
export interface IColumn extends Record<string, any> {
    key?: string;
}
export type IScroll = {
    x?: number;
    y: number;
};
export type OrderType = SORTER_TYPE.asc | SORTER_TYPE.desc | null;
export interface IColumnType<T extends IColumn> {
    key: string;
    title: string | React.ReactNode;
    width: number;
    render?: (item: T, column: IColumnType<T>) => React.ReactNode;
    onSort?: (key: string, order: OrderType) => void;
    align?: COLUMN_ALIGN_TYPE.start | COLUMN_ALIGN_TYPE.center | COLUMN_ALIGN_TYPE.end;
}
export interface ITableProps<T extends IColumn> {
    data: T[];
    columns: IColumnType<T>[];
    loading?: boolean;
    hasSelected?: boolean;
    scroll?: IScroll;
    notFoundContent: React.ReactNode | string;
    rtl?: boolean;
    className?: string;
    leftSideSelectedNode?: React.ReactNode;
    rightSideSelectedNode?: React.ReactNode;
    onChange?: (item: T) => void;
    type?: TABLE_TYPE.minimal | TABLE_TYPE.regular;
}
export interface ISorterProps {
    activeSort: string | null | undefined;
    onClick: () => void;
    children: React.ReactElement;
}
