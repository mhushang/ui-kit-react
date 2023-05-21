import { useEffect, useState } from "react";

import "./useCountdownStyles.scss";

interface ICountDown {
  countdown: JSX.Element;
  secondsLeft: number;
  isStopped: boolean;
  resetTo: (resetSeconds: number) => void;
}

export const useCountdown = (seconds: number): ICountDown => {
  const [secondsLeft, setSecondsLeft] = useState<number>(seconds);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (secondsLeft > 0) {
      timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
    }

    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const minutesStaged = Math.floor(secondsLeft / 60);
  const secondsStaged = Math.round(secondsLeft % 60);

  return {
    countdown: (
      <div className="Countdown">
        {minutesStaged < 10 && "0"}
        {minutesStaged}:{secondsStaged < 10 && "0"}
        {secondsStaged}
      </div>
    ),
    secondsLeft,
    isStopped: secondsLeft <= 0,
    resetTo: (resetSeconds: number) => setSecondsLeft(resetSeconds),
  };
};
