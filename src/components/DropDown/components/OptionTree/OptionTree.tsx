import React, { useState } from 'react';
import clsx from 'clsx';

import './OptionTreeStyles.scss';
import { IOptionTreeProps, IOptionTreeItemProps } from './OptionTreeTypes';
import { Option } from '../Option/Option';
import { getAllChildren } from '../../utils';
import { BUTTON_TYPE } from '../../../Button/ButtonConstants';
import { Button } from '../../../Button';
import { ArrowDownBold, ArrowUpBold } from '../../../../icons';

const OptionTreeItem: React.FC<IOptionTreeItemProps> = ({
  handleChange,
  multiple = false,
  options,
  selectedItems,
  idsToRender = [],
  level = 1,
}: IOptionTreeItemProps) => {
  if (!idsToRender.length) {
    idsToRender = options.filter((i) => !i.parent_id).map((i) => i.id);
  }

  const [openedNodes, setOpenedNodes] = useState<string[]>(idsToRender);

  const getChildNodes = (parentId: string) => {
    const nodeItems = options.filter((i) => i.parent_id === parentId);
    if (!nodeItems.length) return null;
    return (
      <OptionTreeItem
        level={level + 1}
        multiple={multiple}
        options={options}
        idsToRender={nodeItems.map((i) => i.id)}
        selectedItems={selectedItems}
        handleChange={handleChange}
      />
    );
  };

  return (
    <div className="OptionTree-item">
      {idsToRender.map((item: string) => {
        const option = options.find((i) => i.id === item);
        const childrenNodes = getAllChildren(options, item);
        const isSelected = selectedItems.includes(item);
        const isOpened = openedNodes.includes(item);
        return (
          <React.Fragment key={option?.key}>
            <div
              onClick={() => {
                if (isOpened) {
                  setOpenedNodes(openedNodes.filter((i) => i !== item));
                } else {
                  setOpenedNodes([...openedNodes, item]);
                }
              }}
              style={{ '--option-tree-item-padding': level * 12 + 'px' } as React.CSSProperties}
              className={clsx({
                ['OptionTree-item-current']: true,
                ['OptionTree-item-current-selected']: isSelected,
                ['OptionTree-item-current-disabled']: option?.disabled,
              })}
            >
              <div className="OptionTree-item-current-arrow">
                <Button
                  disabled={childrenNodes.length === 0}
                  theme={BUTTON_TYPE.noBorder}
                  ariaLabel={String(option?.label)}
                  centralIcon={
                    !isOpened || childrenNodes.length === 0 ? <ArrowDownBold /> : <ArrowUpBold />
                  }
                />
              </div>
              <Option
                key={`option-tree-${option?.key}`}
                isSelected={isSelected}
                handleChange={(isChecked) => {
                  handleChange && handleChange(isChecked, item);
                }}
                multiple={multiple}
                label={option?.label}
                value={option?.value || ''}
                disabled={option?.disabled}
              />
            </div>
            {childrenNodes.length > 0 && isOpened && (
              <div className="OptionTree-item-children">{getChildNodes(item)}</div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const OptionTree: React.FC<IOptionTreeProps> = (props: IOptionTreeProps) => {
  return (
    <div className="OptionTree">
      <OptionTreeItem {...props} />
    </div>
  );
};

export { OptionTree };
