import React from 'react';
import { render } from '@testing-library/react';

import { Status, STATUS_COLOR } from '../';

describe('Modals', () => {
  const { getByText } = render(
    <Status>
      <div>Status</div>
    </Status>,
  );

  it('showing children', () => {
    expect(getByText('Status')).toBeTruthy();
  });

  (Object.keys(STATUS_COLOR) as Array<keyof typeof STATUS_COLOR>).map((colorName) => {
    it('render correct class for color ' + colorName, async () => {
      const { container } = await render(
        <Status color={colorName}>
          <div>Status</div>
        </Status>,
      );

      expect(container.getElementsByClassName('Status-color-' + colorName).length).toBe(1);
    });
  });

  it('adding disable class', async () => {
    const { container } = await render(
      <Status disabled={true}>
        <div>Status</div>
      </Status>,
    );
    expect(container.getElementsByClassName('Status-disabled').length).toBe(1);
  });

  it('adding disable class', async () => {
    const { container } = await render(
      <Status disabled={true}>
        <div>Status</div>
      </Status>,
    );
    expect(container.getElementsByClassName('Status-disabled').length).toBe(1);
  });
});
