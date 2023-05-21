import React from 'react';

export interface IExpandedProps {
  header: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  label?: React.ReactElement | string | null;
  ariaLabel: string | null;
}
