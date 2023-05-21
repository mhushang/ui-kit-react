import React from 'react';
import clsx from 'clsx';

import './MessageStyles.scss';
import { Error, Info, Success, Warning } from '../../icons';
import { IMessageProps } from './MessageTypes';
import { MESSAGE_TYPE } from './MessageConstants';

const ICONS: Record<string, React.ReactNode> = {
  [MESSAGE_TYPE.error]: <Error />,
  [MESSAGE_TYPE.success]: <Success />,
  [MESSAGE_TYPE.warning]: <Warning />,
  [MESSAGE_TYPE.info]: <Info />,
};

const Message: React.FC<IMessageProps> = ({
  isOpen = true,
  type,
  text,
  icon,
  backgroundColor,
  className,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={clsx({ ['Message']: true, [className || '']: !!className })}>
      <div
        className={clsx({
          ['Message-wrapper']: true,
          [`Message-wrapper-${type}`]: true,
        })}
        style={{ backgroundColor }}
      >
        {icon !== false ? (
          <div className="Message-icon-wrapper">
            <div className="Message-icon">{icon || ICONS[type]}</div>
          </div>
        ) : null}
        <div className="Message-content">{text}</div>
      </div>
    </div>
  );
};

export default Message;
