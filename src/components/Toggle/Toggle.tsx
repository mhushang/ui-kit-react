import React, { ChangeEvent } from "react";
import clsx from "clsx";

import "./ToggleStyles.scss";
import { IToggleProps } from "./ToggleTypes";

export const Toggle: React.FC<IToggleProps> = ({
  ariaLabel,
  disabled,
  error,
  defaultValue,
  value,
  label,
  handleClick,
  handleChange,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange && handleChange(e.target.checked);
  };

  return (
    <div className="Toggle-wrapper">
      <label
        className={clsx({
          ["Toggle"]: true,
          ["Toggle-default"]: true,
          ["Toggle-disabled"]: disabled,
          ["Toggle-error"]: error,
        })}
      >
        <input
          id="toggle"
          type="checkbox"
          className="Toggle-focus"
          aria-label={ariaLabel || ""}
          onClick={handleClick}
          onChange={onChange}
          checked={value}
          defaultChecked={defaultValue}
          disabled={disabled}
        />
        <span
          className={clsx({
            ["Toggle-slider"]: true,
            ["Toggle-slider-default"]: true,
            ["Toggle-slider-disabled"]: disabled,
            ["Toggle-slider-error"]: error,
          })}
        ></span>
      </label>
      <label
        htmlFor="toggle"
        className={clsx({
          ["Toggle-label"]: true,
          ["Toggle-label-error"]: error,
          ["Toggle-label-disabled"]: disabled,
        })}
      >
        {label}
      </label>
    </div>
  );
};
