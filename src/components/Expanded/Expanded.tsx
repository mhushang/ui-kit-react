import React, { useState } from 'react';
import clsx from 'clsx';

import { Button, BUTTON_TYPE } from '../Button';
import { ArrowDownBold, ArrowUpBold } from '../../icons';

import './ExpandedStyles.scss';
import { IExpandedProps } from './ExpandedTypes';

export const Expanded: React.FC<IExpandedProps> = ({
  header,
  ariaLabel,
  content,
  className,
  label,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={clsx({
        ['Expanded']: true,
        ['Expanded-opened']: isOpened,
        [className || '']: !!className,
      })}
    >
      <div className="Expanded-header">
        <Button
          handleClick={() => setIsOpened(!isOpened)}
          leftIcon={isOpened ? <ArrowUpBold /> : <ArrowDownBold />}
          theme={BUTTON_TYPE.noBorder}
          ariaLabel={ariaLabel}
          className="Expanded-header-toggle-button"
          text={label}
        />
        <div className="Expanded-header-content">{header}</div>
      </div>
      {isOpened && <div className="Expanded-content">{content}</div>}
    </div>
  );
};
