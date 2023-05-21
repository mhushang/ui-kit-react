import React from 'react';
import { render } from '@testing-library/react';

import { Message, MESSAGE_TYPE } from '../';

describe('Message', () => {
  it('Message should render the children', () => {
    const { getByText } = render(
      <Message type={MESSAGE_TYPE.success} text={<div>Message content</div>} />,
    );
    expect(getByText('Message content')).toBeDefined();
  });

  it('Message should not render', () => {
    render(
      <Message type={MESSAGE_TYPE.success} text={<div>Message content</div>} isOpen={false} />,
    );
    expect(document.getElementsByClassName('Message')[0]).toBeUndefined();
  });

  it('Message should render with success status', () => {
    render(<Message type={MESSAGE_TYPE.success} text={<div>Message content</div>} />);
    expect(document.getElementsByClassName('Message-wrapper-success')[0]).toBeDefined();
  });

  it('Message should render with error status', () => {
    render(<Message type={MESSAGE_TYPE.error} text={<div>Message content</div>} />);
    expect(document.getElementsByClassName('Message-wrapper-error')[0]).toBeDefined();
  });

  it('Message should render with warning status', () => {
    render(<Message type={MESSAGE_TYPE.warning} text={<div>Message content</div>} />);
    expect(document.getElementsByClassName('Message-wrapper-warning')[0]).toBeDefined();
  });

  it('Message should render with info status', () => {
    render(<Message type={MESSAGE_TYPE.info} text={<div>Message content</div>} />);
    expect(document.getElementsByClassName('Message-wrapper-info')[0]).toBeDefined();
  });

  it('Message should render without left icon', () => {
    render(<Message type={MESSAGE_TYPE.info} text={<div>Message content</div>} icon={false} />);
    expect(document.getElementsByClassName('Message-icon')[0]).toBeUndefined();
  });

  it('Message should have background color #000', () => {
    render(
      <Message type={MESSAGE_TYPE.info} text={<div>Message content</div>} backgroundColor="#000" />,
    );
    const element = document.getElementsByClassName('Message-wrapper')[0];
    const style = window.getComputedStyle(element);

    expect(style.backgroundColor).toBe('rgb(0, 0, 0)');
  });
});
