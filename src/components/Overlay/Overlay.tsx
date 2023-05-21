import React, { useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';

import './OverlayStyles.scss';

import { IOverlayProps } from './OverlayTypes';
import { OVERLAY_PLACEMENT_TYPE } from './OverlayConstants';

const Overlay: React.FC<IOverlayProps> = ({
  isOpen,
  footer,
  width,
  height,
  placement = OVERLAY_PLACEMENT_TYPE.right,
  children,
  onClose,
  closable,
  escClose,
  className,
}) => {
  const documentRef = useRef<Document>(document);
  const documentElement = documentRef.current;

  const handleClose = (ev: React.SyntheticEvent) => {
    ev.stopPropagation();
    if (closable && onClose) {
      onClose();
    }
  };
  const handleEscClose = useCallback(
    (ev: KeyboardEvent) => {
      if (escClose && ev.key === 'Escape' && onClose) {
        onClose();
      }
    },
    [escClose, onClose],
  );

  useEffect(() => {
    if (isOpen) {
      documentElement.body.style.overflow = 'hidden';
      documentElement.addEventListener('keydown', handleEscClose, false);
    }

    return () => {
      documentElement.body.style.overflow = 'unset';
      documentElement.removeEventListener('keydown', handleEscClose, false);
    };
  }, [isOpen, documentElement, escClose, onClose, handleEscClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="Overlay">
      <div className="Overlay-wrapper" onClick={handleClose}>
        <div onClick={(ev) => ev.stopPropagation()}>
          <div
            className={clsx({
              ['Overlay-content']: true,
              [`Overlay-${placement}`]: true,
              [className || '']: !!className,
            })}
            style={{ width: width, height: height }}
          >
            <div>
              <div className="Overlay-body">{children}</div>

              {(placement === OVERLAY_PLACEMENT_TYPE.left ||
                placement === OVERLAY_PLACEMENT_TYPE.right) &&
                footer && <div className="Overlay-footer">{footer}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
