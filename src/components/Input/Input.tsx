import React, { useState, ChangeEvent, MouseEvent, KeyboardEvent } from 'react';
import clsx from 'clsx';
import 'text-security/text-security.css';

import { EyeClosed, EyeOpen } from '../../icons';

import './InputStyles.scss';
import { IInputProps } from './InputTypes';
import { INPUT_TYPE } from './InputConstants';

export const Input: React.FC<IInputProps> = ({
  readOnly = false,
  ariaLabel,
  styles,
  placeholder,
  error,
  errorText,
  bigLabel,
  smallLabel,
  disabled,
  maxLength,
  width = '100%',
  value,
  type,
  icon,
  firstIconButton,
  secondIconButton,
  handleChange,
  handleBlur,
  handleKeyPress,
  name,
  id,
  nativeProps,
}) => {
  const initialCounter = value ? String(value).length : 0;
  const [counter, setCounter] = useState(initialCounter);
  const [isPassVisiable, setPassVisiable] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCounter(e.target.value.length);
    handleChange && handleChange(e);
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    handleBlur && handleBlur(e);
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    handleKeyPress && handleKeyPress(e);
  };

  const handleType = () => {
    if (type && type !== INPUT_TYPE.password) {
      return type;
    }
    if (type === INPUT_TYPE.password) {
      return isPassVisiable || nativeProps?.autoComplete === 'off'
        ? INPUT_TYPE.text
        : INPUT_TYPE.password;
    }

    return INPUT_TYPE.text;
  };

  const handlePassVisiable = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPassVisiable(!isPassVisiable);
  };

  return (
    <div
      className="Input-wrapper"
      style={{
        width: width,
      }}
    >
      {(bigLabel || smallLabel || maxLength) && (
        <div className="Input-top-elements" style={{ width }}>
          <div>
            {bigLabel && (
              <div
                className={clsx({
                  ['Input-big-label']: true,
                  ['Input-big-label-default']: !disabled || !error,
                  ['Input-big-label-disabled']: disabled,
                  ['Input-big-label-error']: error,
                })}
              >
                {bigLabel}
              </div>
            )}
            {smallLabel && (
              <div
                className={clsx({
                  ['Input-small-label']: true,
                  ['Input-small-label-default ']: !disabled || !error,
                  ['Input-small-label-disabled']: disabled,
                  ['Input-small-label-error']: error,
                })}
              >
                {smallLabel}
              </div>
            )}
          </div>
          {maxLength && (
            <div
              className={clsx({
                ['Input-counter']: true,
                ['Input-counter-disabled']: disabled,
              })}
              style={{
                top: (bigLabel && '12px') || (smallLabel && '3px') || '',
              }}
            >
              {counter}/{maxLength}
            </div>
          )}
        </div>
      )}
      <div
        className={clsx({
          ['Input']: true,
          ['Input-disabled']: disabled,
          ['Input-error']: error,
        })}
        style={{
          width: width,
        }}
      >
        {icon && (
          <span
            className={clsx({
              ['Input-icon']: true,
              ['Input-icon-disabled']: disabled,
            })}
          >
            {icon}
          </span>
        )}
        <input
          readOnly={readOnly}
          {...nativeProps}
          className={clsx({
            ['Input-textfield']: true,
            ['Input-textfield-disabled']: disabled,
            ['Input-security']:
              INPUT_TYPE.password && !isPassVisiable && nativeProps?.autoComplete === 'off',
            [nativeProps?.className || '']: nativeProps?.className,
          })}
          aria-label={ariaLabel || ''}
          type={handleType()}
          placeholder={placeholder || ''}
          disabled={disabled}
          maxLength={maxLength}
          onBlur={onBlur}
          onChange={onChange}
          onKeyPress={onKeyPress}
          value={value}
          name={name || ariaLabel || ''}
          id={id}
          style={{ ...{ width: width }, ...styles }}
        />
        {firstIconButton && (
          <button
            className={clsx({
              ['Input-button']: true,
              ['Input-button-disabled']: disabled || firstIconButton.disabled,
            })}
            onClick={firstIconButton.handleClick}
            disabled={disabled || firstIconButton.disabled}
          >
            {firstIconButton.icon}
          </button>
        )}
        {firstIconButton && secondIconButton && <div className="Input-button-divider" />}
        {secondIconButton && type !== `${INPUT_TYPE.password}` && (
          <button
            className={clsx({
              ['Input-button']: true,
              ['Input-button-disabled']: disabled || secondIconButton.disabled,
            })}
            onClick={secondIconButton.handleClick}
            disabled={disabled || secondIconButton.disabled}
            type="button"
          >
            {secondIconButton.icon}
          </button>
        )}
        {type === `${INPUT_TYPE.password}` && (
          <button
            aria-label={isPassVisiable ? 'password visiable' : 'password not visiable'}
            className={clsx({
              ['Input-button']: true,
              ['Input-button-password']: true,
              ['Input-button-disabled']: disabled,
            })}
            onClick={handlePassVisiable}
            type="button"
          >
            {isPassVisiable ? <EyeOpen /> : <EyeClosed />}
          </button>
        )}
      </div>
      {errorText && <div className="Input-error-text">{errorText}</div>}
    </div>
  );
};
