import { renderHook, act } from '@testing-library/react';

import { useCountdown } from '../useCountdown';

describe('useCountdown hook', () => {
  it('should return countdown', () => {
    const { result } = renderHook(() => useCountdown(1000));

    expect(result.current.countdown).toBeDefined();
  });

  it('should reset countdown', () => {
    const { result } = renderHook(() => useCountdown(1000));

    act(() => {
      result.current.resetTo(10);
    });

    expect(result.current.secondsLeft).toBe(10);
  });

  it('should stop countdown', () => {
    const { result } = renderHook(() => useCountdown(0));

    expect(result.current.isStopped).toBe(true);
  });
});
