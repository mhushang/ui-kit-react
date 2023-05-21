import React from 'react';

export interface IModalProps {
  isOpen: boolean;
  children: React.ReactElement;
  closable?: boolean;
  escClose?: boolean;
  width?: number;
  height?: number;
  onClose?: () => void;
  loading?: boolean;
}

export interface KeyboardEvent {
  key: string;
}
