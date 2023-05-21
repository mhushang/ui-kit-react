import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { IColumnType } from '../TableTypes';

import { Table } from '../';

describe('table', () => {
  interface IData extends Record<string, string | string[]> {
    key: string;
    fullName: string;
    role: string;
    tags: string[];
  }

  const getInitialData = (sorter?: (key: string, order: 'asc' | 'desc' | null) => void) => {
    const defaultSorter = (dataIndex: string, order: 'asc' | 'desc' | null) =>
      console.log(dataIndex, order);

    const columns: IColumnType<IData>[] = [
      {
        key: 'fullName',
        title: 'Full Name',
        width: 30,
        onSort: sorter || defaultSorter,
      },
      {
        key: 'role',
        title: 'Role',
        width: 30,
      },
      {
        key: 'tags',
        title: 'Tags',
        width: 20,
        render: (item) => (
          <div>
            {item.tags[0]}20{item.tags[1]}30
          </div>
        ),
      },
      {
        key: '',
        title: 'title',
        width: 20,
      },
    ];

    const dataSource: IData[] = [
      {
        key: 'sdkvnkdsjvnkdsvnsd',
        fullName: 'Francisco Mendes',
        role: 'Full Stack jhjbsdc sdcnjksdc sdcjnsdjcnksdnc sdcsd',
        tags: ['dev', 'blogger'],
      },
    ];

    return {
      dataSource,
      columns,
    };
  };

  const setup = (
    dataSource: IData[],
    columns: IColumnType<IData>[],
    loading = false,
    notFound = 'Empty',
    onChange = () => null,
  ) => {
    return render(
      <Table
        data={dataSource}
        columns={columns}
        notFoundContent={notFound}
        loading={loading}
        onChange={onChange}
      />,
    );
  };

  it('Table should have one header', () => {
    const { dataSource, columns } = getInitialData();
    setup(dataSource, columns);

    const thead = document.querySelectorAll('.Table-header');
    expect(thead).toHaveLength(1);
  });

  it('Table should have one body', () => {
    const { dataSource, columns } = getInitialData();
    setup(dataSource, columns);

    const tbody = document.querySelectorAll('.Table-body');
    expect(tbody).toHaveLength(1);
  });

  it('The number of header cells should be equal to number of columns', () => {
    const { dataSource, columns } = getInitialData();
    setup(dataSource, columns);

    const thead = document.querySelector('.Table-header > .Table-row');

    const headers = thead?.children || [];
    expect(headers).toHaveLength(columns.length);
  });

  it('The number of row cells should be equal to number of data', () => {
    const { dataSource, columns } = getInitialData();
    setup(dataSource, columns);

    const tbody = document.querySelector('.Table-body');
    expect(tbody?.children).toHaveLength(dataSource.length);
  });

  it('Table should have loading content', () => {
    const { dataSource, columns } = getInitialData();
    setup(dataSource, columns, true);

    const leader = document.querySelectorAll('.Table-spining');
    expect(leader).toBeDefined();
  });

  it('Table should have notFound content', () => {
    const { columns } = getInitialData();
    const notFoundText = 'Data not found';
    const { getByText } = setup([], columns, false, notFoundText);

    expect(getByText(notFoundText).innerHTML).toBe(notFoundText);
  });

  it('Table should have sorting content', () => {
    const { dataSource, columns } = getInitialData(() => console.log('sorting'));

    setup(dataSource, columns, false);
    const sorter = document.querySelectorAll('.Sorter');
    expect(sorter).toBeDefined();
    expect(sorter).toBeDefined();
  });

  it('Should be colled sorter function', () => {
    const sorterFn = jest.fn();
    const { dataSource, columns } = getInitialData(sorterFn);

    setup(dataSource, columns, false);
    const sorter = document.querySelectorAll('.Sorter')[0];
    fireEvent.click(sorter);
    expect(sorterFn).toHaveBeenCalled();
  });

  it('Should be colled onChange callback', () => {
    const onChange = jest.fn();
    const { dataSource, columns } = getInitialData();

    setup(dataSource, columns, false, 'empty', onChange);
    const row = document.querySelectorAll('.Table-body > .Table-row')[0];
    fireEvent.click(row);
    expect(onChange).toHaveBeenCalled();
  });
});
