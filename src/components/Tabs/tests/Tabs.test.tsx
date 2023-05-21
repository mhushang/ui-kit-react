import React from 'react';
import { render, screen } from '@testing-library/react';

import { Tabs } from '../';

describe('Tabs', () => {
  const tabsContent = [
    {
      name: 'Tab1',
      key: 'random key1',
      ariaLabel: 'This is content for tab 1 area label!',
      disabled: true,
    },
    {
      name: 'Tab2',
      key: 'random key2',
      ariaLabel: 'This is content for tab 2 area label!',
      disabled: false,
    },
    {
      name: 'Tab3',
      key: 'random key3',
      ariaLabel: 'This is content for tab 3 area label!',
      notificationCount: 100,
    },
  ];

  it('Disabled style for tab navigation is adding correctly', async () => {
    const { container } = render(<Tabs items={tabsContent} />);
    expect(container.getElementsByClassName('Tabs-TabsNavigation-item-disabled').length).toBe(1);
  });

  it('Notification counter showing 99+ if we have > 99 notifications', async () => {
    render(<Tabs items={tabsContent} />);
    expect(await screen.findByText('99+')).toBeDefined();
  });
});
