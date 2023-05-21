import React, { useMemo, useState } from 'react';
import clsx from 'clsx';

import { Loader } from '../Loader';

import './TableStyles.scss';
import { IColumn, IColumnType, OrderType, ITableProps } from './TableTypes';
import Sorter from './components/Sorter/Sorter';
import { SORTER_TYPE, TABLE_TYPE } from './TableConstants';

export function Table<T extends IColumn>({
  data,
  columns,
  hasSelected,
  scroll,
  loading,
  notFoundContent,
  rtl = false,
  className,
  leftSideSelectedNode,
  rightSideSelectedNode,
  onChange,
  type = TABLE_TYPE.regular,
}: ITableProps<T>): JSX.Element {
  const [sorter, setSorter] = useState<Record<string, string | null>>({});

  const columnsWidth = useMemo(() => {
    const widths = columns.map((col) => (col?.width ? `${col.width}%` : '1fr'));
    return widths.join(' ');
  }, [columns]);

  const handleSorter = (column: IColumnType<T>) => {
    let order: OrderType = null;

    if (!sorter?.[column.key]) {
      order = SORTER_TYPE.asc;
    }

    if (sorter?.[column.key] === SORTER_TYPE.asc) {
      order = SORTER_TYPE.desc;
    }
    setSorter({ [column.key]: order });
    column?.onSort?.(column.key, order);
  };

  return (
    <div className="Table-container">
      <div
        className={clsx({
          ['Table']: true,
          ['Table-rtl']: rtl,
          [className || '']: !!className,
          [`Table-${type}`]: !!type,
        })}
      >
        <div
          className={clsx({
            ['Table-header']: true,
            ['action']: !!hasSelected,
          })}
        >
          {hasSelected ? (
            <div
              className={clsx({
                ['Table-header-summary']: true,
                ['with-scroll']: !!scroll?.y,
              })}
            >
              <div>{leftSideSelectedNode}</div>
              <div>{rightSideSelectedNode}</div>
            </div>
          ) : (
            <div
              className={clsx({
                ['Table-row']: true,
                ['with-scroll']: !!scroll?.y,
              })}
              style={{ gridTemplateColumns: columnsWidth }}
            >
              {columns.map((col) => (
                <div
                  key={`table-header-key-${col.key}`}
                  className={clsx({
                    ['Table-cell']: true,
                    [`Table-cell-align-${col.align}`]: !!col.align,
                  })}
                >
                  <div>
                    {col.onSort ? (
                      <Sorter activeSort={sorter?.[col.key]} onClick={() => handleSorter(col)}>
                        <div className="Table-cell-ellipsis">{col.title}</div>
                      </Sorter>
                    ) : (
                      <div className="Table-cell-ellipsis">{col.title}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="Table-content">
          {loading && (
            <div className="Table-spining">
              <Loader />
            </div>
          )}
          {data.length ? (
            <div
              className="Table-body"
              style={{ height: scroll?.y, overflowY: scroll?.y ? 'scroll' : 'hidden' }}
            >
              {data.map((item, index) => (
                <div
                  key={'table-body-row-key-' + index}
                  className="Table-row"
                  style={{ gridTemplateColumns: columnsWidth }}
                  role="button"
                  onClick={() => onChange && onChange(item)}
                  tabIndex={0}
                >
                  {columns.map((col) => (
                    <div
                      key={`table-body-row-cell-key-${col.key}`}
                      className={clsx({
                        ['Table-cell']: true,
                        [`Table-cell-align-${col.align}`]: !!col.align,
                      })}
                    >
                      <div className="Table-cell-ellipsis">
                        {col.render ? col.render(item, col) : item[col.key]}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="Table-placeholder" style={{ height: scroll?.y }}>
              {notFoundContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
