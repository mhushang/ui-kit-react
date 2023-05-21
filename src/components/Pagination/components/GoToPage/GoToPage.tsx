import React, { useState, KeyboardEvent } from 'react';

import { Input, INPUT_TYPE } from '../../../Input';

import './GoToPage.scss';
import { IGoToPageProps } from './GoToPageTypes';

export const GoToPage: React.FC<IGoToPageProps> = ({
  localization,
  totalPages,
  ariaLabel,
  onChange,
  limit,
}) => {
  const [goToPageValue, setGoToPage] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      handleChangePage(goToPageValue);
    }
  };

  const handleChangePage = (page: string) => {
    const newPage = Number(page);
    setGoToPage('');
    return newPage > 0
      ? onChange(newPage > totalPages ? totalPages : newPage, limit)
      : page === ''
      ? false
      : onChange(1, limit);
  };

  return (
    <div className="GoToPage">
      <span>{localization?.go_to}</span>
      <Input
        value={goToPageValue}
        disabled={totalPages === 1}
        handleChange={(e) => setGoToPage(e.target.value)}
        ariaLabel={ariaLabel + ' ' + localization?.go_to_pages}
        handleBlur={(e) => handleChangePage(e.target.value)}
        width={40}
        handleKeyPress={handleKeyDown}
        type={INPUT_TYPE.number}
      />
      <span>{localization?.page}</span>
    </div>
  );
};
