import React, { useEffect, useRef, useState } from 'react';

import { Input } from '../../../Input';
import { ArrowDownBold, ArrowUpBold } from '../../../../icons';

import './InputTagStyles.scss';
import { IInputTagProps } from './InputTagTypes';
import { IOption } from '../Option/OptionTypes';
import { IOptionsTreeItem } from '../OptionTree/OptionTreeTypes';

export const InputTag: React.FC<IInputTagProps> = (props) => {
  const {
    selectedItems,
    options,
    disabled,
    ariaLabel,
    value,
    error,
    errorText,
    placeholder,
    localization,
    showSelectedTags,
    isOpen,
    multiple,
  } = props;
  const [visibleSelectedItems, setVisibleSelectedItems] = useState<Array<string>>([]);
  const [hideSelectedElements, setHideSelectedElements] = useState(false);
  const selectedItemsTagsWrapper = useRef<HTMLDivElement | null>(null);
  const selectedItemsTags = useRef<Array<HTMLDivElement | null>>([]);
  const dropDownInput = useRef<HTMLDivElement | null>(null);

  const fitSelectedItemsAsTags = (spaceForTags: number) => {
    //function to put selected items as tags to input
    let takenSpace = 0;
    const newVisibleSelectedItems: Array<string> = [];
    selectedItemsTags.current.map((element: HTMLDivElement | null) => {
      if (element && spaceForTags - takenSpace >= element.clientWidth) {
        takenSpace += element.clientWidth;
        newVisibleSelectedItems.push(String(element.dataset?.value));
      }
    });
    setVisibleSelectedItems(newVisibleSelectedItems);
  };

  useEffect(() => {
    if (selectedItems !== value) {
      setVisibleSelectedItems([]);
      setHideSelectedElements(false);
    }
  }, [value, selectedItems]);

  useEffect(() => {
    const selectedItemsTagsWrapperElement = selectedItemsTagsWrapper.current;
    const dropDownInputElement = dropDownInput.current;
    if (!hideSelectedElements && dropDownInputElement && selectedItemsTagsWrapperElement) {
      const spaceForTags = dropDownInputElement?.clientWidth - 80;
      if (selectedItemsTagsWrapperElement?.clientWidth > spaceForTags) {
        fitSelectedItemsAsTags(spaceForTags);
        setHideSelectedElements(true);
      } else {
        setHideSelectedElements(false);
        setVisibleSelectedItems([]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems]);

  return (
    <div className="InputTag">
      {multiple && (
        <div ref={selectedItemsTagsWrapper} className="InputTag-selected-items">
          {!showSelectedTags && selectedItems.length > 0 && (
            <div className="InputTag-selected-item-hided">
              {selectedItems.length + ' ' + localization?.selected}
            </div>
          )}

          {showSelectedTags && (
            <>
              {!hideSelectedElements &&
                selectedItems.map((selectedItem, i) => (
                  <div
                    key={'drop-down-selected-item-' + selectedItem}
                    ref={(element) => (selectedItemsTags.current[i] = element)}
                    data-value={selectedItem}
                    className="InputTag-selected-item"
                  >
                    {
                      options?.find((item: IOption | IOptionsTreeItem) => {
                        return item.value === selectedItem;
                      })?.label
                    }
                  </div>
                ))}

              {hideSelectedElements &&
                visibleSelectedItems.map((visibleSelectedItem) => (
                  <div
                    key={'drop-down-selected-item-' + visibleSelectedItem}
                    data-value={visibleSelectedItem}
                    className="InputTag-selected-item"
                  >
                    {
                      options?.find((item: IOption | IOptionsTreeItem) => {
                        return item.value == visibleSelectedItem;
                      })?.label
                    }
                  </div>
                ))}

              {hideSelectedElements && (
                <div className="InputTag-selected-item-hided">
                  + {selectedItems.length - visibleSelectedItems.length} ...
                </div>
              )}
            </>
          )}
        </div>
      )}

      <div style={{ width: '100%' }} ref={dropDownInput}>
        <Input
          readOnly
          value={
            multiple
              ? ''
              : selectedItems[0]
              ? String(options?.find((option) => option.value === selectedItems[0])?.label)
              : ''
          }
          disabled={disabled}
          ariaLabel={ariaLabel || ''}
          error={error}
          errorText={errorText}
          placeholder={selectedItems.length === 0 ? placeholder : ''}
          firstIconButton={{
            icon: isOpen ? <ArrowUpBold /> : <ArrowDownBold />,
            ariaLabel: ariaLabel || '',
            handleClick: () => false,
          }}
        />
      </div>
    </div>
  );
};
