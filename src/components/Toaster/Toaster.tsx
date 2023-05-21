import React from 'react';
import clsx from 'clsx';

import './ToasterStyles.scss';
import { IToasterProps } from './ToasterTypes';
import { Button, BUTTON_TYPE } from '../Button';
import { Cross, Error, Info, Success, Warning } from '../../icons';
import { TOASTER_TYPE } from './ToasterConstants';

const ICONS: Record<string, React.ReactNode> = {
  [TOASTER_TYPE.error]: <Error />,
  [TOASTER_TYPE.success]: <Success />,
  [TOASTER_TYPE.warning]: <Warning />,
  [TOASTER_TYPE.info]: <Info />,
};

const Toaster: React.FC<IToasterProps> = ({ type, text, onClose, icon }) => {
  return (
    <div
      className={clsx({
        ['Toaster']: true,
        [`Toaster-${type}`]: true,
      })}
    >
      <div className="Toaster-content-wrapper">
        {icon !== false ? (
          <div
            className={clsx({
              ['Toaster-icon-wrapper']: true,
              [`Toaster-icon-wrapper-${type}`]: true,
            })}
          >
            <div className="Toaster-icon">{icon || ICONS[type]}</div>
          </div>
        ) : null}
        <div className="Toaster-content">{text}</div>
      </div>
      <div className="Toaster-action">
        <Button
          handleClick={() => onClose && onClose()}
          text={<Cross />}
          ariaLabel="cross icon"
          theme={BUTTON_TYPE.link}
        />
      </div>
    </div>
  );
};

export default Toaster;
