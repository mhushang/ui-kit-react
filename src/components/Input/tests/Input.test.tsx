import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { EyeClosed } from '../../../icons';

import { Input, INPUT_TYPE } from '../';
import { IInput } from '../InputTypes';

describe('Input', () => {
  const label = 'input label';

  const setup = (props?: Partial<IInput>) => {
    const input = render(<Input ariaLabel={label} {...props} />);
    return input;
  };

  it('should have placeholder', () => {
    const placeholder = 'input placeholder';
    const { getAllByPlaceholderText } = setup({ placeholder });
    expect(getAllByPlaceholderText(placeholder).length).toBe(1);
  });

  it('should have error type', () => {
    const { container } = setup({ error: true });
    expect(container.getElementsByClassName('Input-error').length).toBe(1);
  });

  it('should have error text', () => {
    const errorText = 'error text';
    const { getAllByText } = setup({ errorText });
    expect(getAllByText(errorText).length).toBe(1);
  });

  it('should display big label', () => {
    const bigLabel = 'label';
    const { getAllByText } = setup({ bigLabel });
    expect(getAllByText(bigLabel).length).toBe(1);
  });

  it('should display small label', () => {
    const smallLabel = 'label';
    const { getAllByText } = setup({ smallLabel });
    expect(getAllByText(smallLabel).length).toBe(1);
  });

  it('should be disabled', () => {
    const { getByLabelText } = setup({ disabled: true });
    expect(getByLabelText(label)).toHaveProperty('disabled', true);
  });

  it('should have max lenght', () => {
    const { getByLabelText } = setup({ maxLength: 5 });
    expect(getByLabelText(label)).toHaveProperty('maxLength', 5);
  });

  it('should display counter', () => {
    const { getAllByText } = setup({ maxLength: 5 });
    expect(getAllByText('0/5').length).toBe(1);
  });

  it('should change counter value', () => {
    const { getAllByText, getByLabelText } = setup({ maxLength: 5 });
    fireEvent.change(getByLabelText(label), { target: { value: '123' } });
    expect(getAllByText('3/5').length).toBe(1);
  });

  it('should change width', () => {
    const { getByLabelText } = setup({ width: 200 });
    expect(getByLabelText(label).style).toHaveProperty('width', '200px');
  });

  it('should have controled value', () => {
    const value = '12345';
    const { getByLabelText } = setup({ value });
    const input: any = getByLabelText(label);
    expect(input.value).toBe(value);
  });

  it('should be password type', () => {
    const { getByLabelText } = setup({ type: INPUT_TYPE.password });
    expect(getByLabelText(label)).toHaveProperty('type', INPUT_TYPE.password);
  });

  it('shouyld have password button if type is password', () => {
    const { getAllByRole } = setup({ type: INPUT_TYPE.password });
    expect(getAllByRole('button').length).toBe(1);
  });

  it('should change visiability of password', () => {
    const { getByLabelText, getByRole } = setup({ type: INPUT_TYPE.password });
    const input = getByLabelText(label);
    const passwordBtn = getByRole('button');
    fireEvent.click(passwordBtn);
    expect(input).toHaveProperty('type', 'text');
  });

  it('should display icon', () => {
    const { container } = setup({ icon: <EyeClosed /> });
    expect(container.querySelectorAll('svg').length).toBe(1);
  });

  it('should display buttons', () => {
    const foo = {
      icon: <EyeClosed />,
      ariaLabel: label,
      disabled: false,
      handleClick: jest.fn(),
    };
    const { getAllByRole } = setup({ firstIconButton: foo, secondIconButton: foo });
    expect(getAllByRole('button').length).toBe(2);
  });
});
