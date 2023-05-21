import React, { useState } from 'react';

import { PLACEMENT_TYPE, Popover, TRIGGER_TYPE } from '../../../Popover';
import { Button, BUTTON_TYPE } from '../../../Button';
import { ArrowDown } from '../../../../icons';
import { PAGINATION_LIMITS } from '../../PaginationConstants';

import './RangeLimits.scss';
import { IRangeLimitsProps } from './RangeLimitsTypes';

export const RangeLimits: React.FC<IRangeLimitsProps> = ({
  currentPage,
  totalItems,
  rangeLabel,
  limit,
  localization,
  ariaLabel,
  changeLimit,
  rangeDropDownPlacement = PLACEMENT_TYPE.bottom,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const onChangeLimit = (newLimit: number) => {
    changeLimit(newLimit);
    setOpen(false);
  };

  return (
    <div className="RangeLimits">
      <Popover
        isOpen={open}
        onChange={(isOpen) => setOpen(isOpen)}
        arrow={false}
        placement={rangeDropDownPlacement}
        wrapperClassName="RangeLimits-range-drop-down"
        referenceNode={
          <div>
            <Button
              className="RangeLimits-limiter-button"
              rightIcon={<ArrowDown />}
              text={String(limit)}
              ariaLabel={ariaLabel + ' ' + localization?.limit}
            />
          </div>
        }
        trigger={TRIGGER_TYPE.click}
      >
        <div>
          {PAGINATION_LIMITS.map((_limit) => {
            return (
              <Button
                key={'range-limits-limit-item-' + _limit}
                handleClick={() => onChangeLimit(_limit)}
                disabled={_limit === limit}
                theme={BUTTON_TYPE.noBorder}
                text={String(_limit)}
                ariaLabel={ariaLabel + ' ' + localization?.limit + ' ' + _limit}
              />
            );
          })}
        </div>
      </Popover>

      {rangeLabel && (
        <div className="RangeLimits-range-label">
          <span data-testid="paginationRangeFrom">
            {currentPage === 1 ? 1 : (currentPage - 1) * limit + 1}
          </span>
          {' - '}
          <span data-testid="paginationRangeTo">
            {limit * currentPage <= totalItems
              ? limit * currentPage
              : totalItems
              ? totalItems
              : limit}{' '}
          </span>
          {totalItems > 0 && (
            <>
              {localization?.of} <span data-testid="paginationRangeTotal">{totalItems}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};
