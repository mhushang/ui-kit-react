import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Overlay, OVERLAY_PLACEMENT_TYPE } from '../';

describe('Overlay', () => {
  it('Overlay should render the children', () => {
    const { getByText } = render(
      <Overlay placement={OVERLAY_PLACEMENT_TYPE.right} isOpen={true}>
        <div>Overlay content</div>
      </Overlay>,
    );
    expect(getByText('Overlay content')).toBeDefined();
  });

  it('Overlay element not be in DOM when open is false', () => {
    render(
      <Overlay isOpen={false}>
        <div>Overlay content</div>
      </Overlay>,
    );

    expect(document.body.getElementsByClassName('Overlay')[0]).toBeUndefined();
  });

  it('Overlay not closes when clicked outside content area', () => {
    const handleClose = jest.fn();
    render(
      <Overlay isOpen={true} onClose={handleClose}>
        <div>Overlay content</div>
      </Overlay>,
    );

    fireEvent.click(document.body.querySelectorAll('.Overlay')[0]);
    expect(handleClose).toHaveBeenCalledTimes(0);
  });

  it('Overlay closes when clicked outside content area', () => {
    const handleClose = jest.fn();
    render(
      <Overlay isOpen={true} closable onClose={handleClose}>
        <div>Overlay content</div>
      </Overlay>,
    );

    fireEvent.click(document.body.querySelectorAll('.Overlay-wrapper')[0]);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Overlay closes when ESC key is pressed', () => {
    const handleClose = jest.fn();
    render(
      <Overlay isOpen={true} escClose onClose={handleClose}>
        <div>Overlay content</div>
      </Overlay>,
    );

    const evt = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(evt);
    expect(handleClose).toBeCalled();
  });

  it('Overlay dimentions should change', () => {
    const handleClose = jest.fn();
    render(
      <Overlay isOpen={true} onClose={handleClose} width={500} height={400}>
        <div>Overlay content</div>
      </Overlay>,
    );
    const overlayContent = document.getElementsByClassName('Overlay-content');
    const style = window.getComputedStyle(overlayContent[0]);
    expect(style.width).toBe('500px');
    expect(style.height).toBe('400px');
  });
});
