import React, { useState, useMemo, useEffect } from 'react';

import './PaginationStyles.scss';
import { IPaginationProps } from './PaginationTypes';
import { PAGINATION_LIMITS, PAGINATION_DEFAULT_LOCALIZATION } from './PaginationConstants';
import { GoToPage } from './components/GoToPage';
import { RangeLimits } from './components/RangeLimits';
import { PageSelector } from './components/PageSelector';
import { PLACEMENT_TYPE } from '../Popover';

export const Pagination: React.FC<IPaginationProps> = ({
  totalItems,
  onChange,
  ariaLabel,
  currentLimit = PAGINATION_LIMITS[0],
  currentPage = 1,
  rangeDropDown = true,
  rangeLabel = true,
  goToPage = true,
  localization = PAGINATION_DEFAULT_LOCALIZATION,
  rangeDropDownPlacement = PLACEMENT_TYPE.bottom,
}) => {
  const [limit, setLimit] = useState<number>(currentLimit);

  useEffect(() => {
    if (currentLimit !== PAGINATION_LIMITS[0]) {
      setLimit(currentLimit);
    }
  }, [currentLimit]);

  const totalPages = useMemo(() => Math.ceil(totalItems / limit), [totalItems, limit]);

  const changeLimit = (newLimit: number) => {
    const newPage = currentPage === 1 ? 1 : Math.floor(((currentPage - 1) * limit) / newLimit) + 1;
    onChange(newPage, newLimit);
    setLimit(newLimit);
  };

  return (
    <nav className="Pagination">
      {rangeDropDown && (
        <RangeLimits
          rangeDropDownPlacement={rangeDropDownPlacement}
          currentPage={currentPage}
          totalItems={totalItems}
          rangeLabel={rangeLabel}
          limit={limit}
          localization={localization}
          ariaLabel={ariaLabel}
          changeLimit={changeLimit}
        />
      )}

      <div className="Pagination-right-content">
        <PageSelector
          ariaLabel={ariaLabel}
          localization={localization}
          currentPage={currentPage}
          onChange={onChange}
          limit={limit}
          totalPages={totalPages}
          totalItems={totalItems}
        />
        {goToPage && (
          <GoToPage
            localization={localization}
            totalPages={totalPages}
            limit={limit}
            onChange={onChange}
            ariaLabel={ariaLabel}
          />
        )}
      </div>
    </nav>
  );
};
