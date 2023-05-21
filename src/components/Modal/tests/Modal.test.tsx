import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Modal } from '../';

describe('Modals', () => {
  const handleClose = jest.fn();

  const { getByText } = render(
    <Modal isOpen={true} onClose={handleClose}>
      <div>test</div>
    </Modal>,
  );

  it('modal shows the children', () => {
    expect(getByText('test')).toBeTruthy();
  });

  it('modal element not be in DOM when open is false', () => {
    render(
      <Modal isOpen={false} closable onClose={handleClose}>
        <div>modal content</div>
      </Modal>,
    );

    expect(document.body.getElementsByClassName('Modal')[0]).toBeUndefined();
  });

  it('not closes the Modal when clicked outside modal area', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>modal content</div>
      </Modal>,
    );

    fireEvent.click(document.body.querySelectorAll('.Modal')[0]);
    expect(handleClose).toHaveBeenCalledTimes(0);
  });

  it('closes the Modal when clicked outside modal area', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} closable onClose={handleClose}>
        <div>modal content</div>
      </Modal>,
    );

    fireEvent.click(document.body.querySelectorAll('.Modal')[0]);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('closes the Modal when ESC key is pressed', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} escClose onClose={handleClose}>
        <div>modal content</div>
      </Modal>,
    );

    const evt = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(evt);
    expect(handleClose).toBeCalled();
  });

  it('should change dimentions', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} width={300} height={400}>
        <div>modal content</div>
      </Modal>,
    );
    const Modals = document.getElementsByClassName('Modal-content');
    const style = window.getComputedStyle(Modals[0]);
    expect(style.width).toBe('300px');
    expect(style.height).toBe('400px');
  });

  it('should render loader element', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} loading={true}>
        <div>modal content</div>
      </Modal>,
    );
    expect(document.body.querySelectorAll('.Modal-spining')[0]).toBeDefined();
  });
});
