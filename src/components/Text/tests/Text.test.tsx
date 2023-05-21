import React from 'react';
import { render } from '@testing-library/react';

import { Text } from '../Text';

describe('Text', () => {
  const textValue = 'Hello World!';

  it('should have text value', () => {
    const { getByText } = render(<Text>{textValue}</Text>);
    expect(getByText(textValue).innerHTML).toBe(textValue);
  });

  it('should have 30px font size', () => {
    const { container } = render(<Text size={30}>{textValue}</Text>);
    const textElement = container.getElementsByClassName('Text')[0];
    const style = window.getComputedStyle(textElement);

    expect(style.fontSize).toBe('30px');
  });

  it('should have be bold', () => {
    const { container } = render(<Text bold>{textValue}</Text>);

    expect(container.getElementsByClassName('Text-bold').length).toBe(1);
  });

  it('should have underline class', () => {
    const { container } = render(<Text underline>{textValue}</Text>);

    expect(container.getElementsByClassName('Text-underline').length).toBe(1);
  });

  it('should have uppercase class', () => {
    const { container } = render(<Text uppercase> {textValue}</Text>);

    expect(container.getElementsByClassName('Text-uppercase').length).toBe(1);
  });

  it('should have color style ff0000(red)', () => {
    const { container } = render(<Text color="#ff0000"> {textValue}</Text>);
    const textElement = container.getElementsByClassName('Text')[0];
    const style = window.getComputedStyle(textElement);

    expect(style.color).toBe('rgb(255, 0, 0)');
  });

  it('should have pass custom classname', () => {
    const customClassName = 'customClassName';
    const { container } = render(<Text className={customClassName}> {textValue}</Text>);

    expect(container.getElementsByClassName(customClassName).length).toBe(1);
  });

  it('should have', () => {
    const { container } = render(<Text display> {textValue}</Text>);

    expect(container.getElementsByClassName('Text-display').length).toBe(1);
  });
});
