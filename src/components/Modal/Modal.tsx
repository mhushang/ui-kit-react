import React, { useEffect, useRef } from 'react';

import { Loader } from '../Loader';

import './ModalStyles.scss';
import { IModalProps } from './ModalTypes';

export const Modal: React.FC<IModalProps> = ({
  isOpen,
  children,
  onClose,
  closable = false,
  escClose = false,
  width,
  height,
  loading,
}) => {
  const documentRef = useRef<Document>(document);
  const documentElement = documentRef.current;

  const handleClose = (ev: React.SyntheticEvent) => {
    ev.stopPropagation();
    if (closable && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscClose = (ev: KeyboardEvent) => {
      if (escClose && ev.key === 'Escape' && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      documentElement.body.style.overflow = 'hidden';
      documentElement.addEventListener('keydown', handleEscClose, false);
    }

    return () => {
      documentElement.body.style.overflow = 'unset';
      documentElement.removeEventListener('keydown', handleEscClose, false);
    };
  }, [isOpen, documentElement, escClose, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="Modal Modal-wrapper" onClick={handleClose}>
      <div
        className="Modal-content"
        onClick={(ev) => ev.stopPropagation()}
        style={{
          width,
          height,
        }}
      >
        {loading && (
          <div className="Modal-spining">
            <Loader />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
