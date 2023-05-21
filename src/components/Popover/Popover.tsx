import React, { cloneElement, useEffect, useRef, useState, useMemo } from 'react';
import { usePopper } from 'react-popper';
import { ModifierArguments, Options } from '@popperjs/core/lib/types';
import clsx from 'clsx';

import './PopoverStyles.scss';
import { IPopoverProps } from './PopoverTypes';
import { TRIGGER_TYPE } from './PopoverConstants';

export const Popover: React.FC<IPopoverProps> = ({
  children,
  referenceNode,
  placement,
  arrow = true,
  trigger = 'click',
  wrapperClassName,
  fullRefWidth = false,
  isOpen = false,
  onChange,
}) => {
  const [open, setOpen] = useState<boolean>(isOpen);
  const [referenceEl, setReferenceEl] = useState<HTMLElement | null>(null);
  const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
  const [arrowEl, setArrowEl] = useState<HTMLSpanElement | null>(null);
  const documentRef = useRef<Document>(document);
  const documentElement = documentRef.current;

  const { styles, attributes, forceUpdate } = usePopper(referenceEl, popperEl, {
    placement,
    modifiers: useMemo(() => {
      if (fullRefWidth) {
        return [
          { name: 'arrow', options: { element: arrowEl } },
          { name: 'offset', options: { offset: [0, 5] } },
          {
            name: 'sameWidth',
            options: {},
            enabled: true,
            fn: ({ state }: ModifierArguments<Options>) => {
              state.styles.popper.width = `${state.rects.reference.width}px`;
            },
            phase: 'beforeWrite',
            requires: ['computeStyles'],
          },
        ];
      }
      return [
        { name: 'arrow', options: { element: arrowEl } },
        { name: 'offset', options: { offset: [0, 5] } },
      ];
    }, [fullRefWidth, arrowEl]),
  });

  useEffect(() => {
    if (isOpen !== open) setOpen(isOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    const closeOnClickOutside = (ev: MouseEvent) => {
      const { top, bottom, left, right } = popperEl?.getBoundingClientRect() as DOMRect;
      if (
        !referenceEl?.contains(ev.target as Node) &&
        (ev.clientY < top || ev.clientY > bottom || ev.clientX < left || ev.clientX > right)
      ) {
        setOpen(false);
        onChange && onChange(false);
      }
    };

    documentElement.addEventListener('click', closeOnClickOutside);
    return () => {
      documentElement.removeEventListener('click', closeOnClickOutside);
    };
  }, [documentElement, popperEl, referenceEl, open, onChange]);

  useEffect(() => {
    forceUpdate && forceUpdate();
  }, [open, forceUpdate]);

  const onHoverShowTooltip = (event: React.MouseEvent<HTMLElement>) => {
    if (trigger === TRIGGER_TYPE.hover) {
      event.stopPropagation();
      onChange ? onChange(true) : setOpen(true);
    }
  };

  const onHoverHideTooltip = (event: React.MouseEvent<HTMLElement>) => {
    if (trigger === TRIGGER_TYPE.hover) {
      event.stopPropagation();
      onChange ? onChange(false) : setOpen(false);
    }
  };

  const onClickToggleTooltip = () => {
    if (trigger !== TRIGGER_TYPE.click) {
      return;
    }

    onChange ? onChange(!open) : setOpen(!open);
  };

  const referenceElement = cloneElement(referenceNode, {
    ref: setReferenceEl,
    onMouseEnter: onHoverShowTooltip,
    onMouseLeave: onHoverHideTooltip,
    onClick: onClickToggleTooltip,
    role: 'button',
  });

  return (
    <>
      <div className="Popover-reference">{referenceElement}</div>
      <div
        className={clsx({
          ['Popover']: true,
          [wrapperClassName || '']: !!wrapperClassName,
        })}
      >
        <div
          className="Popover-content"
          {...attributes.popper}
          style={styles.popper}
          ref={setPopperEl}
          data-show={open}
        >
          <div>{open && children}</div>
          <span
            ref={setArrowEl}
            style={styles.arrow}
            {...attributes.arrow}
            className="arrow"
            data-hide={!arrow || !open}
          />
        </div>
      </div>
    </>
  );
};
