import React from 'react';
import { render, screen } from '@testing-library/react';

import { EyeClosed } from '../../../icons';

import { Button } from '../';

describe('Button icons', () => {
  const buttonIcons = [
    {
      description: 'should display left icon',
      props: { leftIcon: <EyeClosed /> },
    },
    {
      description: 'should display central icon',
      props: { centralIcon: <EyeClosed /> },
    },
    {
      description: 'should display right icon',
      props: { rightIcon: <EyeClosed /> },
    },
  ];

  for (const button of buttonIcons) {
    it(button.description, () => {
      const { container } = render(<Button ariaLabel="button" {...button.props} />);
      expect(container.getElementsByTagName('svg').length).toBe(1);
    });
  }

  it('should have text on button', async () => {
    const btnText = 'Button text';
    render(<Button ariaLabel="button" text={btnText} />);
    expect(await screen.findByText(btnText)).toBeDefined();
  });
});
