import { renderHook } from '@testing-library/react';

import { useDebounce } from '../useDebounce';

describe('useDebounce hook', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  const mockSetTimeout = () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
  };

  const mockClearTimeout = () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'clearTimeout');
  };

  test('should return debounce value', () => {
    const value = 'value';
    const {
      result: { current: debounceValue },
    } = renderHook(() => useDebounce<string>(value));

    expect(debounceValue).toBe(value);
  });

  test('should debounce with default debounce 2000 ms', () => {
    mockSetTimeout();
    renderHook(() => useDebounce<string>('value'));

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });

  test('should debounce with given debounce', () => {
    mockSetTimeout();
    renderHook(() => useDebounce<string>('value', 3000));

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
  });

  test('should call clearTimeout on unmount', () => {
    mockClearTimeout();
    const { unmount } = renderHook(() => useDebounce<string>('value'));
    unmount();

    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });
});
