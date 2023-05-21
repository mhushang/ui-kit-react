import React, { useMemo } from 'react';
import clsx from 'clsx';

import { Button, BUTTON_TYPE } from '../../../Button';
import { ArrowLeft, ArrowRight } from '../../../../icons';

import './PageSelector.scss';
import { IPageSelectorProps } from './PageSelectorTypes';

export const PageSelector: React.FC<IPageSelectorProps> = ({
  ariaLabel,
  localization,
  currentPage,
  onChange,
  limit,
  totalPages,
  totalItems,
}) => {
  const handleChangePage = (dir: number) => {
    const newPage = currentPage + dir;
    return newPage > totalPages || newPage < 1
      ? newPage < 1
        ? onChange(1, limit)
        : onChange(totalPages, limit)
      : onChange(newPage, limit);
  };

  const pages = useMemo<number[]>(() => {
    const arr = Array.from({ length: totalPages }, (_, i) => i + 1);

    if (totalPages <= 5) return arr;
    if (totalPages > 5) {
      const rangeStart = Math.max(currentPage - 2, 1);
      const rangeEnd = Math.min(currentPage + 2, arr.length);
      return arr.slice(rangeStart - 1, rangeEnd);
    }

    return [];
  }, [totalPages, currentPage]);

  return (
    <ul className="PageSelector">
      <li className="PageSelector-item PageSelector-item-navigation">
        <Button
          centralIcon={<ArrowLeft />}
          ariaLabel={ariaLabel + ' ' + localization?.previous_page}
          handleClick={() => handleChangePage(-1)}
          disabled={currentPage === 1}
          className={clsx({
            ['PageSelector-item-disabled']: currentPage === 1,
          })}
          theme={BUTTON_TYPE.link}
        />
      </li>

      {totalPages > 5 && currentPage > 3 && (
        <li
          className={clsx({
            ['PageSelector-item']: true,
            ['PageSelector-item-active']: currentPage === 1,
          })}
        >
          <Button
            text="1"
            ariaLabel={ariaLabel + ' ' + localization?.page + ' 1'}
            handleClick={() => onChange(1, limit)}
            theme={BUTTON_TYPE.link}
          />
        </li>
      )}

      {totalPages > 5 && currentPage >= 5 && (
        <li className="PageSelector-item PageSelector-item-dots">
          <Button
            ariaLabel={ariaLabel + ' ' + localization?.previous_5_pages}
            text="•••"
            handleClick={() => handleChangePage(-5)}
            theme={BUTTON_TYPE.link}
          />
        </li>
      )}

      {pages.map((page) => {
        return (
          <li
            key={'pagination-item-page-' + page}
            className={clsx({
              ['PageSelector-item']: true,
              ['PageSelector-item-active']: page === currentPage,
            })}
          >
            <Button
              ariaLabel={ariaLabel + ' ' + localization?.page + ' ' + page}
              handleClick={() => onChange(page, limit)}
              theme={BUTTON_TYPE.link}
              text={String(page)}
            />
          </li>
        );
      })}

      {totalPages > 5 && currentPage < totalPages - 3 && (
        <li className="PageSelector-item PageSelector-item-dots">
          <Button
            ariaLabel={ariaLabel + ' ' + localization?.next_5_pages}
            handleClick={() => handleChangePage(5)}
            theme={BUTTON_TYPE.link}
            text="•••"
          />
        </li>
      )}

      {totalPages > 5 && currentPage <= totalPages - 3 && (
        <li
          className={clsx({
            ['PageSelector-item']: true,
            ['PageSelector-item-active']: currentPage === totalPages,
          })}
        >
          <Button
            text={String(totalPages)}
            ariaLabel={ariaLabel + ' ' + localization?.page + ' ' + totalPages}
            handleClick={() => onChange(totalPages, limit)}
            theme={BUTTON_TYPE.link}
          />
        </li>
      )}

      <li className="PageSelector-item PageSelector-item-navigation">
        <Button
          centralIcon={<ArrowRight />}
          ariaLabel={ariaLabel + ' ' + localization?.next_page}
          handleClick={() => handleChangePage(1)}
          disabled={currentPage === totalPages || totalItems === 0}
          theme={BUTTON_TYPE.link}
        />
      </li>
    </ul>
  );
};
