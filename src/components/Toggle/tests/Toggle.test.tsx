import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Toggle } from '..';
import { IToggle } from '../ToggleTypes';

describe('Switch', () => {
  const label = 'switch label';

  const setup = (props?: IToggle) => {
    const switchRender = render(<Toggle ariaLabel={label} {...props} />);
    return switchRender;
  };

  it('should be disabled', () => {
    const { getByLabelText } = setup({ disabled: true });
    expect(getByLabelText(label)).toHaveProperty('disabled', true);
  });

  it('should have error style', () => {
    const { container } = setup({ error: true });
    expect(container.getElementsByClassName('Toggle-error').length).toBe(1);
  });

  it('should has default value', () => {
    const { getByLabelText } = setup({ defaultValue: true });
    expect(getByLabelText(label)).toHaveProperty('defaultChecked', true);
  });

  it('should has label', () => {
    const label = 'blablabla';
    const { getAllByText } = setup({ label });
    expect(getAllByText(label).length).toBe(1);
  });

  it('should switch', () => {
    const { getByLabelText } = setup();
    const toggle = getByLabelText(label);
    fireEvent.click(toggle);
    expect(toggle).toHaveProperty('value', 'on');
  });
});
