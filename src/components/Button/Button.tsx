import React from 'react';
import clsx from 'clsx';

import { Loader, LOADER_COLOR } from '../Loader';

import './ButtonStyles.scss';
import { IButtonProps } from './ButtonTypes';
import { BUTTON_TYPE } from './ButtonConstants';

export const Button: React.FC<IButtonProps> = ({
  ariaLabel,
  text,
  theme,
  error,
  disabled = false,
  className,
  rightIcon,
  centralIcon,
  leftIcon,
  loading,
  handleClick,
  id,
  name,
  tabIndex,
  submit = false,
}) => {
  const loaderColorSelector = () => {
    switch (theme) {
      case BUTTON_TYPE.primaryGreen:
        return LOADER_COLOR.white;
      case BUTTON_TYPE.primaryGrey:
        return LOADER_COLOR.white;
      case BUTTON_TYPE.primaryOrange:
        return LOADER_COLOR.white;
      case BUTTON_TYPE.primaryRed:
        return LOADER_COLOR.white;
      default:
        return LOADER_COLOR.orange;
    }
  };

  return (
    <button
      aria-label={ariaLabel || 'button'}
      onClick={handleClick}
      disabled={disabled || loading}
      className={clsx({
        ['Button']: true,
        ['Button-default']: !theme || theme === BUTTON_TYPE.default,
        ['Button-no-border']: theme === BUTTON_TYPE.noBorder,
        ['Button-link']: theme === BUTTON_TYPE.link,
        ['Buton-link-hover-underline']: theme === BUTTON_TYPE.hoverUnderline,
        ['Button-underline']: theme === BUTTON_TYPE.underline,
        ['Button-primary-orange']: theme === BUTTON_TYPE.primaryOrange,
        ['Button-primary-grey']: theme === BUTTON_TYPE.primaryGrey,
        ['Button-primary-green']: theme === BUTTON_TYPE.primaryGreen,
        ['Button-primary-red']: theme === BUTTON_TYPE.primaryRed,
        ['Button-error']: error,
        [className || '']: !!className,
      })}
      id={id}
      name={name}
      tabIndex={tabIndex}
      type={submit ? 'submit' : 'button'}
    >
      {!loading && leftIcon && <div className="left-icon">{leftIcon}</div>}
      {loading ? (
        <Loader color={loaderColorSelector()} />
      ) : (
        <div className="center-icon">{centralIcon ? centralIcon : text}</div>
      )}
      {!loading && rightIcon && <div className="right-icon">{rightIcon}</div>}
    </button>
  );
};
