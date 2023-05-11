import { useEffect, useRef, useState } from "react";
import { Configuration, calcRemaining } from "../carbonBudgetCalc";

export function usePrevious(value: any) {
    // Use ref to store value
    const ref = useRef();

    // Update ref when value changes
    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

export function useCountdown(updateInterval: number, conf: Configuration) {
    const [remaining, setRemaining] = useState(calcRemaining(conf));

    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining(calcRemaining(conf));
        }, updateInterval);

        // Clear timeout before the component is unmounted
        return () => clearInterval(interval);
    }, [updateInterval, conf]);

    return remaining;
}

export const useThrottle = (value: number, fps: number = 30) => {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastRan = useRef(Date.now());
    const ms = 1000 / fps;

    useEffect(() => {
        const timeoutCallback = () => {
            if (Date.now() - lastRan.current >= ms) {
                setThrottledValue(value);
                lastRan.current = Date.now();
            }
        };
        const duration = ms - (Date.now() - lastRan.current);
        const timeout = setTimeout(timeoutCallback, duration);

        return () => {
            clearTimeout(timeout);
        };
    }, [value, ms]);

    return throttledValue;
};
