import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { DropDownStatus } from '../';
import { IDropDownStatusOption } from '../DropDownStatusTypes';
import { STATUS_COLOR } from '../../Status/StatusConstants';

describe('DropDown', () => {
  const onChange = (value: IDropDownStatusOption) => {
    console.log(value);
  };

  const options = [
    { value: '1', label: STATUS_COLOR.gray },
    { value: '2', label: STATUS_COLOR.blue },
    { value: '3', label: STATUS_COLOR.green },
    { value: '4', label: STATUS_COLOR.red },
    { value: '5', label: STATUS_COLOR.violet },
    { value: '6', label: STATUS_COLOR.orange },
  ];

  it('Render options', async () => {
    const { container } = render(
      <DropDownStatus color={STATUS_COLOR.gray} onChange={onChange} options={options} value="1" />,
    );
    fireEvent.click(container.getElementsByClassName('Status')[0]);
    expect(container.getElementsByClassName('DropDownStatus-option').length).toBe(5);
  });

  it('Showing correct disabled state', async () => {
    const { container } = render(
      <DropDownStatus
        disabled={true}
        color={STATUS_COLOR.gray}
        onChange={onChange}
        options={options}
        value="1"
      />,
    );

    fireEvent.click(container.getElementsByClassName('Status')[0]);
    expect(container.getElementsByClassName('DropDownStatus-option').length).toBe(0);
  });

  it('Showing correct clickable', async () => {
    const { container } = render(
      <DropDownStatus
        disabled={false}
        color={STATUS_COLOR.gray}
        onChange={onChange}
        options={options}
        value="1"
      />,
    );

    fireEvent.click(container.getElementsByClassName('Status')[0]);
    expect(container.getElementsByClassName('Status-clickable').length).toBe(1);
  });

  (Object.keys(STATUS_COLOR) as Array<keyof typeof STATUS_COLOR>).map((color) => {
    it('Render status drop-down with ' + color + ' color', async () => {
      const { container } = render(
        <DropDownStatus color={color} onChange={onChange} options={options} value="1" />,
      );

      fireEvent.click(container.getElementsByClassName('Status')[0]);
      expect(container.getElementsByClassName('Status-color-' + color).length).toBe(1);
    });
  });
});
