import React from 'react';
import clsx from 'clsx';

import { ITextProps } from './TextTypes';
import './TextStyles.scss';

export const Text: React.FC<ITextProps> = ({
  children,
  size,
  bold,
  underline,
  uppercase,
  color,
  spacing,
  className,
  display,
}) => (
  <div
    className={clsx({
      ['Text']: true,
      ['Text-display ']: !!display,
      ['Text-bold']: !!bold,
      ['Text-underline']: !!underline,
      ['Text-uppercase']: !!uppercase,

      [className || '']: !!className,
    })}
    style={{
      fontSize: size,
      color: color,
      letterSpacing: spacing,
    }}
  >
    {children}
  </div>
);
