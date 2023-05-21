import React from 'react';
import clsx from 'clsx';

import './ToasterContainerStyles.scss';
import { IToasterContainerProps } from './ToasterContainerTypes';
import Toaster from '../../Toaster';

const ToasterContainer: React.FC<IToasterContainerProps> = ({ toasters, placement, close }) => {
  return (
    <div
      className={clsx({
        ['ToasterContainer']: true,
        [`ToasterContainer-${placement}`]: true,
      })}
    >
      {toasters.map((toast) => (
        <div className="ToasterContainer-content" key={toast.id}>
          <Toaster
            text={toast.text}
            type={toast.type}
            onClose={() => close(toast.id || '')}
            icon={toast.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default ToasterContainer;
