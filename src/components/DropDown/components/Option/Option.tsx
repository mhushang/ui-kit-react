import React, { memo, useCallback } from 'react';
import clsx from 'clsx';

import { Checkbox } from '../../../Checkbox';
import { BUTTON_TYPE, Button } from '../../../Button';

import './OptionStyles.scss';
import { IOptionProps } from './OptionTypes';

const Option: React.FC<IOptionProps> = memo((props: IOptionProps) => {
  const { isSelected = false, handleChange, multiple = false, label, value, disabled } = props;
  const handleCheckboxChange = useCallback(
    (isChecked: boolean) => {
      handleChange && handleChange(isChecked, value);
    },
    [handleChange, value],
  );

  return (
    <div onClick={(e) => (multiple ? e.stopPropagation() : false)} className="Option">
      {multiple && (
        <Checkbox
          disabled={disabled}
          ariaLabel={String(label)}
          onChange={handleCheckboxChange}
          value={isSelected}
          label={label}
        />
      )}

      {!multiple && (
        <Button
          theme={BUTTON_TYPE.link}
          disabled={disabled}
          className={clsx({
            ['Option-singlechoice-item']: true,
            ['Option-singlechoice-item-selected']: isSelected,
          })}
          handleClick={(e) => {
            e.stopPropagation();
            handleCheckboxChange(true);
          }}
          text={label}
          ariaLabel={String(label)}
        />
      )}
    </div>
  );
});
Option.displayName = 'Option';

export { Option };
