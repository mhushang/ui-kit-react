import React, { useState } from 'react';

import './DropDownButtonStyles.scss';
import { IDropDownButtonProps, IDropDownButtonOption } from './DropDownButtonTypes';
import { Button, BUTTON_TYPE } from '../Button';
import { Popover, TRIGGER_TYPE, PLACEMENT_TYPE } from '../Popover';

export const DropDownButton: React.FC<IDropDownButtonProps> = (props) => {
  const {
    options = [],
    onChange,
    value,
    disabled,
    placeholder,
    leftIcon,
    className,
    label,
    labelPrefix,
  } = props;
  const [selectedItem, setSelectedItem] = useState<IDropDownButtonOption | null>(
    (value && options && options.find((option) => option.value === value)) || null,
  );
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleChange = (option: IDropDownButtonOption) => {
    setSelectedItem(option);
    setPopoverOpen(false);
    onChange && onChange(option);
  };

  const dropDownButtonText = () => {
    if (placeholder && !selectedItem?.label) {
      return placeholder;
    }

    if (label) {
      return label;
    }

    if (selectedItem?.label) {
      return labelPrefix ? `${labelPrefix}: ${selectedItem?.label}` : selectedItem?.label;
    }

    return '';
  };

  const getSeletedOptionClassName = (selectedOption: string | number) => {
    if (((selectedItem && selectedItem.value) || '') === selectedOption) {
      return 'active';
    }

    return '';
  };

  return (
    <div className={`DropDownButton ${className && className}`}>
      <Popover
        isOpen={isPopoverOpen}
        arrow={false}
        onChange={(isOpen) => !disabled && setPopoverOpen(isOpen)}
        placement={PLACEMENT_TYPE.bottomStart}
        referenceNode={
          <div>
            <Button
              className="DropDownButton-reference-node"
              handleClick={() => !disabled && setPopoverOpen(!isPopoverOpen)}
              text={dropDownButtonText()}
              leftIcon={leftIcon}
              ariaLabel="Dropdown button"
              disabled={disabled}
            />
          </div>
        }
        wrapperClassName="DropDownButton-popover"
        trigger={TRIGGER_TYPE.click}
      >
        <div className="DropDownButton-options">
          {options.map((option) => (
            <Button
              key={'DropDownButton-options-button-' + option.value}
              ariaLabel="Dropdown option"
              className={`DropDownButton-option ${getSeletedOptionClassName(option.value)}`}
              handleClick={() => handleChange(option)}
              theme={BUTTON_TYPE.noBorder}
              text={option.label}
              disabled={option.disabled}
            />
          ))}
        </div>
      </Popover>
    </div>
  );
};
