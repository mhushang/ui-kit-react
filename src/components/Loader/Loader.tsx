import React from 'react';
import clsx from 'clsx';

import './LoaderStyles.scss';
import { ILoaderProps } from './LoaderTypes';
import { LOADER_COLOR } from './LoaderConstants';

export const Loader: React.FC<ILoaderProps> = ({ color = LOADER_COLOR.orange }) => {
  return (
    <div
      className={clsx({
        ['Loader-wrapper']: true,
        ['Loader-orange']: color === LOADER_COLOR.orange,
        ['Loader-white']: color === LOADER_COLOR.white,
      })}
    >
      <div className="Loader-dot-left" />
      <div className="Loader-dot-center" />
      <div className="Loader-dot-right" />
    </div>
  );
};
