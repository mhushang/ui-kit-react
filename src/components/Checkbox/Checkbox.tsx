import React, { useState, useEffect, DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { ICheckboxProps } from './CheckboxTypes';
import { CHECKBOX_VALUE } from './CheckboxConstants';
import { CheckboxChecked, CheckboxIndefinite } from '../../icons';

import './CheckboxStyles.scss';

export const Checkbox: React.FC<ICheckboxProps> = (props) => {
  const { disabled, children, value, label, className, onChange, ariaLabel, error } = props;

  const [isChecked, setIsChecked] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disabled);

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    setIsChecked(!isChecked);
    onChange && onChange(!isChecked, e);
  };

  const handleEnterPress = (
    ev: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  ) => {
    if ((ev.key === 'Enter' || ev.key === ' ') && !disabled) {
      setIsChecked(!isChecked);
      onChange && onChange(!isChecked);
    }
  };

  useEffect(() => {
    setIsDisabled(disabled);
  }, [disabled]);

  useEffect(() => {
    const checked = typeof value === 'boolean' ? value : false;
    const indefinite = value === CHECKBOX_VALUE.indeterminate;
    if (indefinite) {
      setIsIndeterminate(true);
      setIsChecked(false);
    } else {
      setIsIndeterminate(false);
      setIsChecked(checked);
    }
  }, [value]);

  useEffect(() => {
    setIsError(!!error);
  }, [error]);

  return (
    <>
      <div className="Checkbox">
        <label>
          <div
            className={clsx({
              [className || '']: !!className,
              ['Checkbox-checked']: isChecked || isIndeterminate,
              ['Checkbox-unchecked']: !isChecked && !isIndeterminate,
              ['Checkbox-error']: isError,
              ['Checkbox-disabled']: isDisabled,
            })}
          >
            <div
              className="Checkbox-container"
              role="input"
              tabIndex={0}
              onKeyDown={handleEnterPress}
            >
              <input
                type="checkbox"
                onChange={handleChangeCheckbox}
                aria-label={ariaLabel || 'checkbox'}
                tabIndex={-1}
                disabled={disabled}
              />
              {isChecked && <CheckboxChecked />}
              {isIndeterminate && !isChecked && <CheckboxIndefinite />}
            </div>
          </div>
          {(label || children) && <div className="Checkbox-label">{label || children}</div>}
        </label>
      </div>
    </>
  );
};
