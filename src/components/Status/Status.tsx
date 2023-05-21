import React from 'react';
import clsx from 'clsx';

import { IStatusProps } from './StatusTypes';
import { STATUS_COLOR } from './StatusConstants';
import './StatusStyles.scss';

export const Status: React.FC<IStatusProps> = ({
  isClickable = false,
  children,
  color = STATUS_COLOR.none,
  disabled = false,
  highlightBorder = false,
  className = '',
  leftIcon,
  onClick,
  rightIcon,
}) => {
  return (
    <div
      {...(isClickable
        ? {
            tabIndex: 0,
            onClick: onClick,
            onKeyPress: (event) => event.key === 'Enter' && onClick && onClick(),
          }
        : {})}
      className={clsx({
        ['Status']: true,
        ['Status-color-' + color]: !disabled,
        ['Status-disabled']: disabled,
        ['Status-highlight-border']: highlightBorder,
        ['Status-clickable']: isClickable,
        ['Status-with-icon']: rightIcon || leftIcon,
        [className || '']: !!className,
      })}
    >
      {leftIcon && <div className="Status-left-icon">{leftIcon}</div>}
      <div className="Status-content">{children}</div>
      {rightIcon && <div className="Status-right-icon">{rightIcon}</div>}
    </div>
  );
};
