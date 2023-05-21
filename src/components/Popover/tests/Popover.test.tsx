import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { PLACEMENT_TYPE, Popover, TRIGGER_TYPE } from '../';

describe('Popover', () => {
  it('should visible when reference clicked', async () => {
    render(
      <Popover
        referenceNode={<div className="reference-test-btn">Click me</div>}
        placement={PLACEMENT_TYPE.right}
        trigger={TRIGGER_TYPE.click}
      >
        <div>Popover content</div>
      </Popover>,
    );
    fireEvent.click(document.body.querySelectorAll('.reference-test-btn')[0]);
    expect(await screen.findByText('Popover content')).toBeVisible();
  });

  it('should visible when hover reference', async () => {
    render(
      <Popover
        referenceNode={<div className="reference-test-btn">Click me</div>}
        placement={PLACEMENT_TYPE.top}
        trigger={TRIGGER_TYPE.hover}
      >
        <div>Popover content</div>
      </Popover>,
    );
    fireEvent.mouseEnter(document.body.querySelectorAll('.reference-test-btn')[0]);
    expect(await screen.findByText('Popover content')).toBeVisible();
  });
});
