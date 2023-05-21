interface ICountDown {
    countdown: JSX.Element;
    secondsLeft: number;
    isStopped: boolean;
    resetTo: (resetSeconds: number) => void;
}
export declare const useCountdown: (seconds: number) => ICountDown;
export {};
