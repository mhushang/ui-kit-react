import React, { KeyboardEvent } from 'react';
import clsx from 'clsx';

import { SortDown, SortUp } from '../../../../icons';

import './SorterStyles.scss';
import { ISorterProps } from '../../TableTypes';
import { SORTER_TYPE } from '../../TableConstants';

const Sorter: React.FC<ISorterProps> = ({ activeSort, onClick, children }) => {
  const handleEnterPress = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      onClick();
    }
  };

  const handleClick = (ev: React.SyntheticEvent) => {
    ev.stopPropagation();
    onClick();
  };

  return (
    <div
      className="Sorter"
      onClick={handleClick}
      tabIndex={0}
      role="button"
      onKeyDown={handleEnterPress}
    >
      {children}
      <span className="Sorter-inner">
        <span
          role="presentation"
          className={clsx({
            ['Sorter-up']: true,
            ['icon']: true,
            ['active']: activeSort === SORTER_TYPE.asc,
          })}
        >
          <SortUp />
        </span>
        <span
          role="presentation"
          className={clsx({
            ['Sorter-down']: true,
            ['icon']: true,
            ['active']: activeSort === SORTER_TYPE.desc,
          })}
        >
          <SortDown />
        </span>
      </span>
    </div>
  );
};

export default Sorter;
