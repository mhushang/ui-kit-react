import React from 'react';
import { render, screen } from '@testing-library/react';

import { Pagination } from '../';

describe('Pagination', () => {
  it('Rendering correct total', async () => {
    render(<Pagination ariaLabel="testing pagination" onChange={() => 0} totalItems={2512} />);
    expect(await screen.getByTestId('paginationRangeTotal')).toHaveTextContent('2512');
  });

  it('Rendering correct start range', async () => {
    render(<Pagination ariaLabel="testing pagination" onChange={() => 0} totalItems={5000} />);
    expect(await screen.getByTestId('paginationRangeFrom')).toHaveTextContent('1');
  });

  it('Rendering correct end range', async () => {
    render(<Pagination ariaLabel="testing pagination" onChange={() => 0} totalItems={10} />);
    expect(await screen.getByTestId('paginationRangeTo')).toHaveTextContent('10');
  });

  it('Showing controls like range and go to page by default', () => {
    const { container } = render(
      <Pagination ariaLabel="testing pagination" onChange={() => 0} totalItems={10} />,
    );
    expect(container.getElementsByClassName('GoToPage').length).toBe(1);
    expect(container.getElementsByClassName('RangeLimits-range-label').length).toBe(1);
    expect(container.getElementsByClassName('RangeLimits-range-drop-down').length).toBe(1);
  });

  it('Hiding go to page control', async () => {
    const { container } = render(
      <Pagination
        goToPage={false}
        ariaLabel="testing pagination"
        onChange={() => 0}
        totalItems={10}
      />,
    );
    expect(container.getElementsByClassName('GoToPage').length).toBe(0);
  });

  it('Hiding range label', async () => {
    const { container } = render(
      <Pagination
        rangeLabel={false}
        ariaLabel="testing pagination"
        onChange={() => 0}
        totalItems={10}
      />,
    );
    expect(container.getElementsByClassName('RangeLimits-range-label').length).toBe(0);
  });

  it('Hiding range drop down', async () => {
    const { container } = render(
      <Pagination
        rangeDropDown={false}
        ariaLabel="testing pagination"
        onChange={() => 0}
        totalItems={10}
      />,
    );
    expect(container.getElementsByClassName('RangeLimits-range-drop-down').length).toBe(0);
  });

  it('Showing correct active page', async () => {
    const { container } = render(
      <Pagination
        currentPage={2}
        ariaLabel="testing pagination"
        onChange={() => 0}
        totalItems={100}
      />,
    );
    expect(container.getElementsByClassName('PageSelector-item-active')[0]).toHaveTextContent('2');
  });
});
