import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import './TabsStyles.scss';
import { ITabsProps, ITab } from './TabsTypes';

export const Tabs: React.FC<ITabsProps> = ({ onChange, items, divider = true, activeKey = '' }) => {
  const [activeTab, setActiveTab] = useState<string>(items[0].key);

  useEffect(() => {
    if (activeTab !== items[0].key) {
      setActiveTab(activeKey);
    }
    // If we put activeTab and items as a dependancy there is some side effects will come up
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey]);

  const handleClick = (item: ITab) => {
    item.onClick ? item.onClick(item) : onChange?.(item);
    setActiveTab(item.key);
  };

  return (
    <div
      className={clsx({
        ['Tabs']: true,
        ['Tabs-with-bottom-border']: divider,
      })}
    >
      <div className="Tabs-TabsNavigation">
        {items.map((item) => (
          <div
            key={item.key}
            className={clsx({
              ['Tabs-TabsNavigation-wrapper-item']: true,
              ['Tabs-TabsNavigation-wrapper-item-has-notification']:
                item.notificationCount && item.notificationCount > 0,
            })}
          >
            <button
              aria-label={item.ariaLabel || ''}
              onClick={() => handleClick(item)}
              disabled={item.disabled}
              className={clsx({
                ['Tabs-TabsNavigation-item']: true,
                ['Tabs-TabsNavigation-item-active']: activeTab === item.key,
                ['Tabs-TabsNavigation-item-disabled']: item.disabled,
              })}
            >
              {item.name}
            </button>
            {item.notificationCount && (
              <span className="Tabs-TabsNavigation-notificationCount">
                {item.notificationCount > 99 ? '99+' : item.notificationCount}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
