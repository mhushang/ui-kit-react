import React, { useState, useEffect, useCallback } from 'react';

import { Popover, PLACEMENT_TYPE, TRIGGER_TYPE } from '../Popover';
import { Button, BUTTON_TYPE } from '../Button';
import { Loader } from '../Loader';
import { Input } from '../Input';
import { Cross, Search } from '../../icons';

import { IDropDownProps } from './DropDownTypes';
import { DROPDOWN_DEFAULT_LOCALIZATION } from './DropDownConstants';
import { InputTag } from './components/InputTag';
import { OptionTree, IOptionsTreeItem } from './components/OptionTree';
import { Option, IOption } from './components/Option';
import './DropDownStyles.scss';
import { searchTreeOptions } from './utils';

export const DropDown: React.FC<IDropDownProps> = (props) => {
  const {
    options,
    placeholder,
    multiple = false,
    error = false,
    errorText = '',
    onChange,
    value = [],
    disabled = false,
    tree = false,
    ariaLabel,
    localization = DROPDOWN_DEFAULT_LOCALIZATION,
    isLoading = false,
    searchIsActive = true,
    onClearSelected,
    showClearSelectedButton = false,
    showSelectedTags = true,
  } = props;
  const [selectedItems, setSelectedItems] = useState<string[]>(
    typeof value === 'string' ? [value] : value,
  );
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = useCallback(
    (isOpen: boolean) => {
      if (open !== isOpen) setOpen(isOpen);
    },
    [open],
  );

  const [filteredOptions, setFilteredOptions] = useState<IOption[] | IOptionsTreeItem[]>(options);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  useEffect(() => {
    if (selectedItems.toString() !== value.toString()) {
      //validate incoming values
      const valuesArray = typeof value === 'string' ? [value] : value;
      const newValues = valuesArray.filter((val) =>
        options.some((item: IOption | IOptionsTreeItem) => item.value === val),
      );

      setSelectedItems(newValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = useCallback(
    (isChecked: boolean, checkBoxValue: string) => {
      const newValue = !multiple
        ? [checkBoxValue]
        : isChecked
        ? [...selectedItems, checkBoxValue]
        : selectedItems.filter((value) => value !== checkBoxValue);

      onChange && onChange(multiple ? newValue : newValue[0]);

      if (!multiple) onOpen(false);
    },
    [selectedItems, onChange, multiple, onOpen],
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLowerCase();

    if (!search) {
      setFilteredOptions(options ? options : []);
      return void 0;
    }

    if (tree) {
      const newOptions = searchTreeOptions(options as IOptionsTreeItem[], search);
      setFilteredOptions(newOptions ? newOptions : []);
    } else {
      const filteredOptions: IOption[] | IOptionsTreeItem[] = options?.filter(
        (item: IOption | IOptionsTreeItem) => String(item.label).toLowerCase().indexOf(search) >= 0,
      ) as IOption[] | IOptionsTreeItem[];
      setFilteredOptions([...filteredOptions]);
    }

    return void 0;
  };

  return (
    <div className="DropDown">
      <Popover
        isOpen={open && !disabled}
        onChange={onOpen}
        arrow={false}
        trigger={TRIGGER_TYPE.click}
        fullRefWidth={true}
        placement={PLACEMENT_TYPE.bottom}
        referenceNode={
          <div>
            <InputTag
              multiple={multiple}
              isOpen={open}
              ariaLabel={ariaLabel}
              showSelectedTags={showSelectedTags}
              placeholder={placeholder}
              error={error}
              errorText={errorText}
              value={value}
              disabled={disabled}
              setFilteredOptions={setFilteredOptions}
              selectedItems={selectedItems}
              options={options}
              localization={localization}
            />
          </div>
        }
      >
        <div>
          {!isLoading && (
            <div className="DropDown-option-wrapper">
              {searchIsActive && (
                <div className="DropDown-option-wrapper-search">
                  <Input
                    handleChange={handleSearch}
                    icon={<Search />}
                    placeholder={localization?.search}
                    ariaLabel={localization?.search || ''}
                  />
                </div>
              )}

              {showClearSelectedButton && selectedItems.length > 0 && (
                <Button
                  ariaLabel={localization?.clear_selected || ''}
                  handleClick={() => onClearSelected && onClearSelected()}
                  leftIcon={<Cross />}
                  className="DropDown-clear"
                  theme={BUTTON_TYPE.link}
                  text={localization?.clear_selected}
                />
              )}

              {!tree &&
                filteredOptions.map((option: IOption | IOptionsTreeItem) => {
                  return (
                    <Option
                      {...option}
                      key={option.key}
                      isSelected={selectedItems.indexOf(option.value) >= 0}
                      handleChange={handleChange}
                      multiple={multiple}
                    />
                  );
                })}

              {tree && (
                <OptionTree
                  options={filteredOptions as IOptionsTreeItem[]}
                  selectedItems={selectedItems}
                  handleChange={handleChange}
                  multiple={multiple}
                />
              )}

              {filteredOptions.length === 0 && (
                <div className="DropDown-no-data">{localization.no_data}</div>
              )}
            </div>
          )}

          {isLoading && (
            <div className="DropDown-loader">
              <Loader />
            </div>
          )}
        </div>
      </Popover>
    </div>
  );
};
