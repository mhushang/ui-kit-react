import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Expanded } from '../';

describe('Expanded', () => {
  it('Showing/hiding content by clicks', async () => {
    const { container } = await render(
      <Expanded
        ariaLabel="area label text for button open/close"
        header={'Header'}
        content={<p className="content">Content</p>}
      />,
    );

    const button = container.getElementsByClassName('Expanded-header-toggle-button')[0];

    //content not showing by default
    expect(container.getElementsByClassName('content').length).toBe(0);
    fireEvent.click(button);

    //show content after click
    expect(container.getElementsByClassName('content').length).toBe(1);

    //hide content again
    fireEvent.click(button);
    expect(container.getElementsByClassName('content').length).toBe(0);
  });

  it('Icon changed after open/close', async () => {
    const { getByTestId, container } = await render(
      <Expanded
        ariaLabel="area label text for button open/close"
        header={'Header'}
        content={<p className="content">Content</p>}
      />,
    );

    const button = container.getElementsByClassName('Expanded-header-toggle-button')[0];

    //by default expanded is closed, check if svg icon down is defined
    expect(getByTestId('arrow-down-bold')).toBeDefined();

    //open expanded , check if svg icon up is defined
    fireEvent.click(button);
    expect(getByTestId('arrow-up-bold')).toBeDefined();
  });
});
