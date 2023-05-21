import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { DropDownButton } from '..';
import { IDropDownButtonOption } from '../DropDownButtonTypes';

describe('DropDown', () => {
  const onChange = (value: IDropDownButtonOption) => {
    console.log(value);
  };

  const options = [
    {
      value: '1',
      key: '1',
      label: '1',
    },
    {
      value: '2',
      key: '2',
      label: '2',
      disabled: true,
    },
    {
      value: '3',
      key: '3',
      label: '3',
    },
    {
      value: '4',
      key: '4',
      label: '4',
    },
    {
      value: '5',
      key: '5',
      label: '5',
      disabled: true,
    },
    {
      value: '6',
      key: '6',
      label: '6',
    },
  ];

  it('Render options', async () => {
    const { container } = render(
      <DropDownButton onChange={onChange} options={options} value="1" />,
    );
    fireEvent.click(container.getElementsByClassName('DropDownButton-reference-node')[0]);
    expect(container.getElementsByClassName('DropDownButton-option').length).toBe(6);
  });

  it('Showing correct disabled state', async () => {
    const { container } = render(
      <DropDownButton disabled={true} onChange={onChange} options={options} value="2" />,
    );

    fireEvent.click(container.getElementsByClassName('DropDownButton-reference-node')[0]);
    expect(container.getElementsByClassName('DropDownButton-option').length).toBe(0);
  });
});
