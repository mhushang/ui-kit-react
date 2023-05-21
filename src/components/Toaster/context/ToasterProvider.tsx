import React, { useState } from 'react';

import ToasterContext from './ToasterContext';
import { IToaster, IToasterProviderProps } from '../ToasterTypes';
import ToasterContainer from '../components/ToasterContainer/ToasterContainer';
import { generateUUID } from '../../../helpers';

const ToasterProvider: React.FC<IToasterProviderProps> = ({ children, placement }) => {
  const [toasters, setToasters] = useState<IToaster[]>([]);

  const close = (id: string) =>
    setToasters((currToasters) => currToasters.filter((toast) => toast.id !== id));

  const open = ({ autoClose = true, ...toaster }: IToaster): string => {
    const id = generateUUID();

    setToasters((currToasters: IToaster[]) => [{ id, ...toaster }, ...currToasters]);

    autoClose && setTimeout(() => close(id), toaster?.duration || 2000);

    return id;
  };

  return (
    <ToasterContext.Provider value={{ toaster: open, closeToaster: close }}>
      {children}
      <ToasterContainer placement={placement} toasters={toasters} close={close} />
    </ToasterContext.Provider>
  );
};

export default ToasterProvider;
