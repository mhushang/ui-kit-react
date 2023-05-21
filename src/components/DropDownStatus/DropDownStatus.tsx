import React, { useEffect, useState } from 'react';
import { ArrowDownBold, ArrowUpBold } from '../../icons';

import './DropDownStatusStyles.scss';
import { IDropDownStatusProps, IDropDownStatusOption } from './DropDownStatusTypes';
import { Status } from '../Status';
import { Button, BUTTON_TYPE } from '../Button';
import { Popover, TRIGGER_TYPE, PLACEMENT_TYPE } from '../Popover';

export const DropDownStatus: React.FC<IDropDownStatusProps> = (props) => {
  const { disabled = false, onChange, value = '', options = [] } = props;
  const [selectedItem, setSelectedItem] = useState<IDropDownStatusOption>(options[0]);
  const [isOpenPopover, setIsOpenPopover] = useState(false);
  const handleChange = (option: IDropDownStatusOption) => {
    setSelectedItem(option);
    setIsOpenPopover(false);
    onChange && onChange(option);
  };

  useEffect(() => {
    if (selectedItem.value !== value) {
      setSelectedItem(options.find((option) => option.value === value) || options[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, setSelectedItem, options]);

  return (
    <div className="DropDownStatus">
      <Popover
        isOpen={isOpenPopover}
        arrow={false}
        onChange={(isOpen) => !disabled && setIsOpenPopover(isOpen)}
        placement={PLACEMENT_TYPE.bottom}
        referenceNode={
          <div>
            <Status
              onClick={() => !disabled && setIsOpenPopover(!isOpenPopover)}
              isClickable={!disabled}
              highlightBorder={true}
              rightIcon={isOpenPopover ? <ArrowUpBold /> : <ArrowDownBold />}
              {...props}
            >
              {selectedItem.label}
            </Status>
          </div>
        }
        wrapperClassName="DropDownStatus-popover"
        trigger={TRIGGER_TYPE.click}
      >
        <div className="DropDownStatus-options">
          {options
            .filter((option) => option.value !== selectedItem.value)
            .map((option) => (
              <Button
                key={'DropDownStatus-options-button-' + option.value}
                ariaLabel={option.label}
                className="DropDownStatus-option"
                handleClick={() => handleChange(option)}
                theme={BUTTON_TYPE.noBorder}
                text={option.label}
              />
            ))}
        </div>
      </Popover>
    </div>
  );
};
