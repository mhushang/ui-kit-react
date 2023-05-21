import React from 'react';
import { fireEvent, render, act } from '@testing-library/react';

import { ToasterProvider } from '../context';
import { TOASTER_PLACEMENT_TYPE, TOASTER_TYPE } from '../ToasterConstants';
import { useToaster } from '../hooks/useToaster';

describe('Toaster', () => {
  const pause = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const setup = (component: React.ReactNode) => {
    return render(
      <ToasterProvider placement={TOASTER_PLACEMENT_TYPE.top}>
        <div>{component}</div>
      </ToasterProvider>,
    );
  };

  it('Toaster should render with content', () => {
    const ToasterApp = () => {
      const { toaster } = useToaster();

      const handleClick = () => {
        toaster({
          text: 'Toaster text',
          type: TOASTER_TYPE.success,
          autoClose: false,
        });
      };

      return (
        <div>
          <button id="toasterBtnTestId" onClick={handleClick}>
            Show toster
          </button>
        </div>
      );
    };
    const { getByText } = setup(<ToasterApp />);

    fireEvent.click(document.body.querySelectorAll('#toasterBtnTestId')[0]);

    expect(getByText('Toaster text')).toBeDefined();
  });

  it('Toaster should render with the status successful', () => {
    const ToasterApp = () => {
      const { toaster } = useToaster();

      const handleClick = () => {
        toaster({
          text: 'Toaster text',
          type: TOASTER_TYPE.success,
          autoClose: false,
          duration: 10000,
        });
      };

      return (
        <div>
          <button id="toasterBtnTestId" onClick={handleClick}>
            Show toster
          </button>
        </div>
      );
    };

    setup(<ToasterApp />);
    fireEvent.click(document.body.querySelectorAll('#toasterBtnTestId')[0]);
    expect(document.body.getElementsByClassName('Toaster-success')[0]).not.toBeNull();
  });

  it('Toaster should render with the status error', () => {
    const ToasterApp = () => {
      const { toaster } = useToaster();

      const handleClick = () => {
        toaster({
          text: 'Toaster text',
          type: TOASTER_TYPE.error,
          autoClose: false,
          duration: 10000,
        });
      };

      return (
        <div>
          <button id="toasterBtnTestId" onClick={handleClick}>
            Show toster
          </button>
        </div>
      );
    };

    setup(<ToasterApp />);
    fireEvent.click(document.body.querySelectorAll('#toasterBtnTestId')[0]);
    expect(document.body.getElementsByClassName('Toaster-error')[0]).not.toBeNull();
  });

  it('Toaster should render with the status info', () => {
    const ToasterApp = () => {
      const { toaster } = useToaster();

      const handleClick = () => {
        toaster({
          text: 'Toaster text',
          type: TOASTER_TYPE.info,
          autoClose: false,
          duration: 10000,
        });
      };

      return (
        <div>
          <button id="toasterBtnTestId" onClick={handleClick}>
            Show toster
          </button>
        </div>
      );
    };

    setup(<ToasterApp />);
    fireEvent.click(document.body.querySelectorAll('#toasterBtnTestId')[0]);
    expect(document.body.getElementsByClassName('Toaster-info')[0]).not.toBeNull();
  });

  it('Toaster should render with the status warning', () => {
    const ToasterApp = () => {
      const { toaster } = useToaster();

      const handleClick = () => {
        toaster({
          text: 'Toaster text',
          type: TOASTER_TYPE.warning,
          autoClose: false,
          duration: 10000,
        });
      };

      return (
        <div>
          <button id="toasterBtnTestId" onClick={handleClick}>
            Show toster
          </button>
        </div>
      );
    };

    setup(<ToasterApp />);
    fireEvent.click(document.body.querySelectorAll('#toasterBtnTestId')[0]);
    expect(document.body.getElementsByClassName('Toaster-warning')[0]).not.toBeNull();
  });

  it('Toaster should close after duration time', async () => {
    const ToasterApp = () => {
      const { toaster } = useToaster();

      const handleClick = () => {
        toaster({
          text: 'Toaster duration',
          type: TOASTER_TYPE.success,
        });
      };

      return (
        <div>
          <button id="toasterBtnTestId" onClick={handleClick}>
            Show toster
          </button>
        </div>
      );
    };
    setup(<ToasterApp />);

    act(() => {
      fireEvent.click(document.body.querySelectorAll('#toasterBtnTestId')[0]);
    });

    await pause(2100);

    expect(document.body.querySelectorAll('.Toaster-content')[0]).toBeUndefined();
  });

  it('Toaster should should close when the close button is clicked', () => {
    const ToasterApp = () => {
      const { toaster } = useToaster();

      const handleClick = () => {
        toaster({
          text: 'Toaster text',
          type: TOASTER_TYPE.success,
          autoClose: false,
        });
      };

      return (
        <div>
          <button id="toasterBtnTestId" onClick={handleClick}>
            Show toster
          </button>
        </div>
      );
    };

    setup(<ToasterApp />);
    fireEvent.click(document.body.querySelectorAll('#toasterBtnTestId')[0]);
    expect(document.body.getElementsByClassName('Toaster-content')[0]).not.toBeUndefined();

    fireEvent.click(document.body.querySelectorAll('.Toaster-action > .Button')[0]);
    expect(document.body.getElementsByClassName('Toaster-content')[0]).toBeUndefined();
  });
});
